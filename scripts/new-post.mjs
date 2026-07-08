import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const contentDir = path.join(root, "src", "content", "blog");
const templatesDir = path.join(root, "templates", "blog");
const defaultTags = ["tag1", "tag2", "tag3"];

function printUsage() {
  console.log(`Create a blog draft.

Usage:
  bun run new:post -- --title "Deploying the blog" --tags devops,astro
  bun run new:post -- "Keyboard setup notes" --tags keyboard,setup

Required flags:
  --title <title>          Post title (can also be passed positionally)

Optional flags:
  --description <text>     Frontmatter description
  --tags <tag,tag>         Comma-separated tags. Defaults to tag1,tag2,tag3
  --series <name>          Optional series name
  --slug <slug>            Override generated slug
  --date <YYYY-MM-DD>      Override publishedAt date
  --mdx                    Create a .mdx draft. This is the default
  --md                     Create a plain .md draft
  --publish                Set draft: false
  --help                   Show this help message
`);
}

function parseArgs(argv) {
  const options = {};
  const positionals = [];

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (!arg.startsWith("--")) {
      positionals.push(arg);
      continue;
    }

    const [rawKey, inlineValue] = arg.slice(2).split("=", 2);
    const key = rawKey.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

    if (key === "help") {
      options.help = true;
      continue;
    }

    if (key === "publish") {
      options.publish = true;
      continue;
    }

    if (key === "mdx") {
      options.mdx = true;
      continue;
    }

    if (key === "md") {
      options.mdx = false;
      continue;
    }

    const value = inlineValue ?? argv[index + 1];
    if (!value || value.startsWith("--")) {
      throw new Error(`Missing value for --${rawKey}`);
    }

    options[key] = value;
    if (inlineValue === undefined) {
      index += 1;
    }
  }

  if (!options.title && positionals.length > 0) {
    options.title = positionals.join(" ");
  }

  return options;
}

function today() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);

  return local.toISOString().slice(0, 10);
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function yamlString(value) {
  return JSON.stringify(value);
}

function yamlTag(value) {
  return /^[a-z0-9][a-z0-9 -]*$/i.test(value) ? value : yamlString(value);
}

function parseTags(value) {
  if (!value) {
    return defaultTags;
  }

  const tags = value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  return tags.length > 0 ? tags : defaultTags;
}

function buildFrontmatter({ title, description, date, tags, series, publish }) {
  const lines = [
    "---",
    `title: ${yamlString(title)}`,
    `description: ${yamlString(description)}`,
    `publishedAt: ${date}`,
  ];

  if (tags.length > 0) {
    lines.push("tags:", ...tags.map((tag) => `  - ${yamlTag(tag)}`));
  } else {
    lines.push("tags: []");
  }

  if (series) {
    lines.push(`series: ${yamlString(series)}`);
  }

  lines.push(`draft: ${publish ? "false" : "true"}`, "---", "");

  return lines.join("\n");
}

function readTemplate() {
  const templatePath = path.join(templatesDir, "post.md");

  return readFileSync(templatePath, "utf8").trimStart();
}

function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.help) {
    printUsage();
    return;
  }

  if (!options.title) {
    printUsage();
    throw new Error("--title is required.");
  }

  const title = String(options.title).trim();
  const slug = options.slug ? slugify(options.slug) : slugify(title);

  if (!slug) {
    throw new Error("Could not generate a slug. Pass --slug with ASCII letters or numbers.");
  }

  const description = options.description ?? "TODO: Write a short summary.";
  const date = options.date ?? today();
  const tags = parseTags(options.tags);
  const extension = options.mdx === false ? "md" : "mdx";
  const existingPostPath = ["md", "mdx"]
    .map((candidate) => path.join(contentDir, `${slug}.${candidate}`))
    .find((candidate) => existsSync(candidate));
  const filename = `${slug}.${extension}`;
  const postPath = path.join(contentDir, filename);

  if (existingPostPath) {
    throw new Error(`Post already exists: ${path.relative(root, existingPostPath)}`);
  }

  mkdirSync(contentDir, { recursive: true });

  const frontmatter = buildFrontmatter({
    title,
    description,
    date,
    tags,
    series: options.series,
    publish: options.publish,
  });
  const template = readTemplate().replaceAll("{{title}}", title);

  writeFileSync(postPath, `${frontmatter}${template}`, "utf8");
  console.log(`Created ${path.relative(root, postPath)}`);
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
