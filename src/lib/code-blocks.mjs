const shellLanguages = new Set(["bash", "console", "sh", "shell", "shellscript", "terminal", "zsh"]);
const logLanguages = new Set(["log", "logs"]);

const languageLabels = {
  astro: "Astro",
  bash: "Shell",
  console: "Console",
  css: "CSS",
  diff: "Diff",
  html: "HTML",
  javascript: "JavaScript",
  js: "JavaScript",
  json: "JSON",
  jsonc: "JSONC",
  log: "Log",
  md: "Markdown",
  mdx: "MDX",
  nix: "Nix",
  shell: "Shell",
  sh: "Shell",
  text: "Text",
  ts: "TypeScript",
  tsx: "TSX",
  typescript: "TypeScript",
  yaml: "YAML",
  yml: "YAML",
  zsh: "Zsh",
};

function getLanguageLabel(language) {
  if (!language) {
    return "Code";
  }

  return languageLabels[language] ?? language.toUpperCase();
}

function getMetaValue(meta, key) {
  const pattern = new RegExp(`(?:^|\\s)${key}=("[^"]*"|'[^']*'|\\S+)`);
  const match = meta.match(pattern);

  if (!match) {
    return undefined;
  }

  return match[1].replace(/^["']|["']$/g, "");
}

function normalizeClassList(className) {
  if (Array.isArray(className)) {
    return className;
  }

  if (typeof className === "string") {
    return className.split(/\s+/).filter(Boolean);
  }

  return [];
}

function hasClass(node, className) {
  return normalizeClassList(node.properties?.className).includes(className);
}

function addClass(node, className) {
  const classes = new Set(normalizeClassList(node.properties?.className));
  classes.add(className);
  node.properties = {
    ...node.properties,
    className: [...classes],
  };
}

function getStringProperty(value) {
  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.filter((item) => typeof item === "string").join(" ");
  }

  return undefined;
}

function isElement(node, tagName) {
  return node?.type === "element" && (!tagName || node.tagName === tagName);
}

function visitParents(node, visitor, parent = undefined) {
  if (!node || !Array.isArray(node.children)) {
    return;
  }

  for (let index = 0; index < node.children.length; index += 1) {
    const child = node.children[index];
    visitor(child, index, node, parent);
    visitParents(child, visitor, node);
  }
}

export function transformerCodeBlockMeta() {
  return {
    name: "dev-with-min-code-block-meta",
    pre(node) {
      const language = String(this.options.lang ?? this.options.langId ?? "").toLowerCase();
      const meta = String(this.options.meta?.__raw ?? "");
      const title = getMetaValue(meta, "title") ?? getMetaValue(meta, "filename") ?? getMetaValue(meta, "file");
      const kind = shellLanguages.has(language) ? "terminal" : logLanguages.has(language) ? "log" : undefined;
      const properties = { ...(node.properties ?? {}) };

      delete properties.style;

      node.properties = {
        ...properties,
        "data-language": language,
        "data-language-label": getLanguageLabel(language),
        ...(title ? { "data-title": title } : {}),
        ...(kind ? { "data-code-kind": kind } : {}),
      };
    },
  };
}

export function rehypeCodeBlocks() {
  return (tree) => {
    visitParents(tree, (node, index, parent) => {
      if (!isElement(node, "pre") || !parent || hasClass(node, "mermaid")) {
        return;
      }

      const code = node.children?.find((child) => isElement(child, "code"));

      if (!code || hasClass(parent, "code-block")) {
        return;
      }

      const language = getStringProperty(node.properties?.["data-language"]);
      const languageLabel = getStringProperty(node.properties?.["data-language-label"]) ?? getLanguageLabel(language);
      const title = getStringProperty(node.properties?.["data-title"]);
      const kind = getStringProperty(node.properties?.["data-code-kind"]);
      const figureClasses = ["code-block"];

      if (kind) {
        figureClasses.push(`code-block--${kind}`);
      }

      addClass(node, "code-block__pre");

      parent.children[index] = {
        type: "element",
        tagName: "figure",
        properties: {
          className: figureClasses,
          ...(language ? { "data-language": language } : {}),
        },
        children: [
          {
            type: "element",
            tagName: "figcaption",
            properties: { className: ["code-block__header"] },
            children: [
              {
                type: "element",
                tagName: "span",
                properties: { className: ["code-block__title"] },
                children: [{ type: "text", value: title ?? languageLabel }],
              },
              {
                type: "element",
                tagName: "span",
                properties: { className: ["code-block__actions"] },
                children: [
                  ...(title
                    ? [
                        {
                          type: "element",
                          tagName: "span",
                          properties: { className: ["code-block__language"] },
                          children: [{ type: "text", value: languageLabel }],
                        },
                      ]
                    : []),
                  {
                    type: "element",
                    tagName: "button",
                    properties: {
                      className: ["code-block__copy"],
                      type: "button",
                      "data-code-copy": "",
                      "aria-label": "Copy code",
                    },
                    children: [{ type: "text", value: "Copy" }],
                  },
                ],
              },
            ],
          },
          {
            type: "element",
            tagName: "div",
            properties: { className: ["code-block__scroller"] },
            children: [node],
          },
        ],
      };
    });
  };
}
