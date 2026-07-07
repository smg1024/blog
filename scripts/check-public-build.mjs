import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const distDir = path.join(root, "dist");
const contentDir = path.join(root, "src", "content", "blog");
const siteUrl = "https://blog.ridewithmin.com";
const failures = [];

function check(condition, message) {
  if (!condition) {
    failures.push(message);
  }
}

function readDistFile(relativePath) {
  return readFileSync(path.join(distDir, relativePath), "utf8");
}

function walkFiles(directory) {
  if (!existsSync(directory)) {
    return [];
  }

  return readdirSync(directory).flatMap((name) => {
    const filePath = path.join(directory, name);
    const stats = statSync(filePath);

    return stats.isDirectory() ? walkFiles(filePath) : [filePath];
  });
}

function parseFrontmatter(filePath) {
  const source = readFileSync(filePath, "utf8");
  const match = source.match(/^---\n([\s\S]*?)\n---/);

  return match?.[1] ?? "";
}

check(existsSync(distDir), "dist/ does not exist. Run `bun run build` first.");

if (existsSync(distDir)) {
  for (const requiredFile of [
    "index.html",
    "rss.xml",
    "robots.txt",
    "sitemap-index.xml",
    "sitemap-0.xml",
  ]) {
    check(existsSync(path.join(distDir, requiredFile)), `Missing ${requiredFile} in dist/.`);
  }
}

if (failures.length === 0) {
  const home = readDistFile("index.html");
  const rss = readDistFile("rss.xml");
  const robots = readDistFile("robots.txt");
  const sitemapIndex = readDistFile("sitemap-index.xml");
  const sitemap = readDistFile("sitemap-0.xml");

  check(
    home.includes(`<link rel="canonical" href="${siteUrl}/">`),
    "Homepage canonical URL is missing or incorrect.",
  );
  check(
    home.includes(`<meta property="og:image" content="${siteUrl}/images/logo.png">`),
    "Open Graph image is missing.",
  );
  check(
    home.includes(`<meta name="twitter:card" content="summary_large_image">`),
    "Twitter card metadata is missing.",
  );
  check(
    home.includes(`<link rel="alternate" type="application/rss+xml"`),
    "RSS alternate link is missing from the homepage.",
  );
  check(rss.includes("<title>Dev with Min</title>"), "RSS feed title is missing or incorrect.");
  check(
    robots.includes(`Sitemap: ${siteUrl}/sitemap-index.xml`),
    "robots.txt does not point to the production sitemap.",
  );
  check(
    sitemapIndex.includes(`${siteUrl}/sitemap-0.xml`),
    "Sitemap index does not reference sitemap-0.xml.",
  );
  check(sitemap.includes(`${siteUrl}/`), "Sitemap does not contain production URLs.");

  const publicText = walkFiles(distDir)
    .filter((filePath) => /\.(html|xml|txt)$/i.test(filePath))
    .map((filePath) => readFileSync(filePath, "utf8"))
    .join("\n");

  check(
    !publicText.includes("Draft preview. This post is excluded from production builds."),
    "Draft preview text leaked into the public build.",
  );

  for (const postPath of walkFiles(contentDir).filter((filePath) =>
    /\.(md|mdx)$/i.test(filePath),
  )) {
    const frontmatter = parseFrontmatter(postPath);

    if (!/^draft:\s*true\s*$/m.test(frontmatter)) {
      continue;
    }

    const slug = path
      .relative(contentDir, postPath)
      .replace(/\.(md|mdx)$/i, "")
      .split(path.sep)
      .join("/");
    const route = `/blog/${slug}/`;

    check(
      !existsSync(path.join(distDir, "blog", slug, "index.html")),
      `Draft post route leaked into dist/: ${slug}`,
    );
    check(!publicText.includes(route), `Draft post URL leaked into public output: ${route}`);
  }
}

if (failures.length > 0) {
  console.error("Public build check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Public build check passed.");
