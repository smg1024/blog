import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const contentDir = path.join(root, "src", "content", "writing");
const templatesDir = path.join(root, "templates", "writing");

const sectionAliases = new Map([
  ["light", "light-notes"],
  ["note", "light-notes"],
  ["notes", "light-notes"],
  ["light-notes", "light-notes"],
  ["field", "field-logs"],
  ["log", "field-logs"],
  ["logs", "field-logs"],
  ["field-logs", "field-logs"],
  ["deep", "deep-dives"],
  ["dive", "deep-dives"],
  ["dives", "deep-dives"],
  ["deep-dives", "deep-dives"],
]);

function printUsage() {
  console.log(`Create a writing draft.

Usage:
  bun run new:post -- --section field-logs --title "Deploying the blog"
  bun run new:post -- notes "Keyboard setup notes" --tags keyboard,setup

Options:
  --section <section>      light-notes | field-logs | deep-dives
  --title <title>          Post title
  --description <text>     Frontmatter description
  --tags <tag,tag>         Comma-separated tags
  --series <name>          Optional series name
  --slug <slug>            Override generated slug
  --date <YYYY-MM-DD>      Override publishedAt date
  --publish                Set draft: false
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

    const value = inlineValue ?? argv[index + 1];
    if (!value || value.startsWith("--")) {
      throw new Error(`Missing value for --${rawKey}`);
    }

    options[key] = value;
    if (inlineValue === undefined) {
      index += 1;
    }
  }

  if (!options.section && positionals[0]) {
    options.section = positionals.shift();
  }

  if (!options.title && positionals.length > 0) {
    options.title = positionals.join(" ");
  }

  return options;
}

function normalizeSection(section) {
  const normalized = sectionAliases.get(String(section).toLowerCase());

  if (!normalized) {
    throw new Error(`Unknown section "${section}". Use light-notes, field-logs, or deep-dives.`);
  }

  return normalized;
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

function parseTags(value) {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function buildFrontmatter({ title, description, date, section, tags, series, publish }) {
  const lines = [
    "---",
    `title: ${yamlString(title)}`,
    `description: ${yamlString(description)}`,
    `publishedAt: ${date}`,
    `section: ${section}`,
  ];

  if (tags.length > 0) {
    lines.push("tags:", ...tags.map((tag) => `  - ${yamlString(tag)}`));
  } else {
    lines.push("tags: []");
  }

  if (series) {
    lines.push(`series: ${yamlString(series)}`);
  }

  lines.push(`draft: ${publish ? "false" : "true"}`, "---", "");

  return lines.join("\n");
}

function readTemplate(section) {
  const templatePath = path.join(templatesDir, `${section}.md`);

  return readFileSync(templatePath, "utf8").trimStart();
}

function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.help) {
    printUsage();
    return;
  }

  if (!options.section || !options.title) {
    printUsage();
    throw new Error("Both --section and --title are required.");
  }

  const section = normalizeSection(options.section);
  const title = String(options.title).trim();
  const slug = options.slug ? slugify(options.slug) : slugify(title);

  if (!slug) {
    throw new Error("Could not generate a slug. Pass --slug with ASCII letters or numbers.");
  }

  const description = options.description ?? "TODO: Write a short summary.";
  const date = options.date ?? today();
  const tags = parseTags(options.tags);
  const filename = `${slug}.md`;
  const postPath = path.join(contentDir, filename);

  if (existsSync(postPath)) {
    throw new Error(`Post already exists: ${path.relative(root, postPath)}`);
  }

  mkdirSync(contentDir, { recursive: true });

  const frontmatter = buildFrontmatter({
    title,
    description,
    date,
    section,
    tags,
    series: options.series,
    publish: options.publish,
  });
  const template = readTemplate(section).replaceAll("{{title}}", title);

  writeFileSync(postPath, `${frontmatter}${template}`, "utf8");
  console.log(`Created ${path.relative(root, postPath)}`);
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
