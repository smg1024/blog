// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://blog.ridewithmin.com",
  integrations: [
    expressiveCode({
      // First theme (Latte) is the light default; Macchiato is applied on [data-theme='dark'].
      themes: ["catppuccin-latte", "catppuccin-macchiato"],
      // Follow the site's manual theme toggle instead of prefers-color-scheme.
      themeCssSelector: (theme) => `[data-theme='${theme.type}']`,
      useDarkModeMediaQuery: false,
      frames: {
        showCopyToClipboardButton: true,
        removeCommentsWhenCopyingTerminalFrames: false,
      },
      styleOverrides: {
        borderColor: "var(--code-border)",
        borderRadius: "8px",
        codeBackground: "var(--code-bg)",
        codeFontFamily:
          '"D2Coding", "D2 coding subset", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
        codeFontSize: "0.92rem",
        codeLineHeight: "1.65",
        codePaddingBlock: "1.1rem",
        codePaddingInline: "1.4rem",
        codeSelectionBackground: "rgba(136, 57, 239, 0.2)",
        uiFontFamily:
          '"D2Coding", "D2 coding subset", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
        uiFontSize: "0.78rem",
        frames: {
          editorTabBarBackground: "var(--surface-alt)",
          frameBoxShadowCssValue: "none",
          inlineButtonBorder: "var(--code-border)",
          inlineButtonForeground: "var(--code-ink)",
          terminalTitlebarBackground: "var(--surface-alt)",
        },
      },
    }),
    mdx(),
    sitemap(),
  ],
});
