// @ts-check

import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerRemoveNotationEscape,
} from "@shikijs/transformers";
import { defineConfig } from "astro/config";
import { rehypeCodeBlocks, transformerCodeBlockMeta } from "./src/lib/code-blocks.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.ridewithmin.com",
  integrations: [mdx(), sitemap()],
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeCodeBlocks],
    }),
    shikiConfig: {
      transformers: [
        transformerCodeBlockMeta(),
        transformerMetaHighlight({ className: "line--highlighted" }),
        transformerNotationHighlight({
          classActiveLine: "line--highlighted",
          classActivePre: "has-highlighted-lines",
        }),
        transformerNotationFocus({
          classActiveLine: "line--focused",
          classActivePre: "has-focused-lines",
        }),
        transformerNotationDiff({
          classActivePre: "has-diff-lines",
          classLineAdd: "line--add",
          classLineRemove: "line--remove",
        }),
        transformerNotationErrorLevel({
          classActivePre: "has-marked-lines",
          classMap: {
            error: "line--error",
            warning: "line--warning",
          },
        }),
        transformerRemoveNotationEscape(),
      ],
    },
  },
});
