// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.ridewithmin.com",
  integrations: [
    expressiveCode({
      themes: ["github-dark-dimmed"],
      frames: {
        showCopyToClipboardButton: true,
        removeCommentsWhenCopyingTerminalFrames: false,
      },
      styleOverrides: {
        borderColor: "var(--code-border)",
        borderRadius: "8px",
        codeBackground: "var(--code-bg)",
        codeFontSize: "0.92rem",
        codeLineHeight: "1.65",
        codePaddingBlock: "1.1rem",
        codePaddingInline: "1.1rem",
        codeSelectionBackground: "rgba(45, 212, 191, 0.22)",
        uiFontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        uiFontSize: "0.78rem",
        frames: {
          editorTabBarBackground: "color-mix(in srgb, var(--code-bg) 88%, #ffffff)",
          frameBoxShadowCssValue: "0 14px 34px rgba(17, 24, 39, 0.14)",
          inlineButtonBorder: "var(--code-border)",
          inlineButtonForeground: "var(--code-ink)",
          terminalTitlebarBackground: "color-mix(in srgb, var(--code-bg) 88%, #ffffff)",
        },
      },
    }),
    mdx(),
    sitemap(),
  ],
});
