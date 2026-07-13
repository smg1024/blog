---
version: alpha
name: Dev with Min
description: A minimalist software-engineer blog — Catppuccin palette, bilingual EN/KR type, system-default light/dark.
# Default theme is `system`: the site follows the visitor's OS preference, rendering
# Latte (light) or Macchiato (dark). The tokens below are the LIGHT (Catppuccin Latte)
# reference set the two themes are authored against; Macchiato mirrors every token 1:1
# via [data-theme="dark"]. See the Colors section for the full light/dark mapping.
colors:
  accent: "#8839ef" # Mauve — the single accent
  accentWarm: "#fe640b" # Peach — drafts / warnings
  background: "#eff1f5" # Base — page / reading surface
  surface: "#e6e9ef" # Mantle — cards, header, panels
  surfaceAlt: "#dce0e8" # Crust — insets, hover fills
  ink: "#4c4f69" # Text — primary reading text
  muted: "#5c5f77" # Subtext1 — descriptions
  soft: "#6c6f85" # Subtext0 — secondary meta
  line: "#ccd0da" # Surface0 — borders
  lineStrong: "#bcc0cc" # Surface1 — hover / stronger borders
  infoBlue: "#1e66f5" # Decision callouts, links
  successGreen: "#40a02b" # Tip callouts
  dangerRed: "#d20f39" # Danger callouts
  sky: "#04a5e5" # Todo callouts
typography:
  display:
    fontFamily: Pretendard
    fontSize: 3rem
    fontWeight: 760
    lineHeight: 1.05
  heading:
    fontFamily: Pretendard
    fontSize: 1.85rem
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: Pretendard
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  prose:
    fontFamily: Pretendard
    fontSize: 1.05rem
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: D2Coding
    fontSize: 0.78rem
    fontWeight: 760
    letterSpacing: 0.08em
  code:
    fontFamily: D2Coding
    fontSize: 0.92rem
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: 5px
  md: 8px
  full: 999px
spacing:
  xs: 0.5rem
  sm: 0.85rem
  md: 1rem
  lg: 2rem
  xl: 3rem
components:
  themeToggle:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    borderColor: "{colors.line}"
    rounded: "{rounded.md}"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.line}"
    rounded: "{rounded.md}"
    padding: 1.1rem
  callout:
    backgroundColor: "{colors.surfaceAlt}"
    accentColor: "{colors.accent}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  codeBlock:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.line}"
    fontFamily: D2Coding
    rounded: "{rounded.md}"
  tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.line}"
    rounded: "{rounded.full}"
  navLink:
    textColor: "{colors.muted}"
    fontFamily: D2Coding
---

## Overview

**Identity:** a minimalist software engineer's field notes — precise, warm, self-hosted.
Easy to read; **never** a product-designer showcase with heavy 3D or motion. Every decision
below is tested against that sentence: if an option is more "field notes" and less
"corporate," it wins.

The default theme is **`system`**: the site follows the visitor's OS preference, rendering
Catppuccin **Latte** (light) or **Macchiato** (dark) to match. The two themes mirror each
other token-for-token; **Latte is the reference set** they're authored against. Theme is
applied through a `[data-theme]` attribute on `<html>`, resolved before first paint by a tiny
inline script, so there is no flash. The server-rendered `<html>` ships with
`data-theme="dark"`, which the script overrides for JS visitors — so with **JavaScript
disabled the site falls back to the dark (Macchiato) theme**. A header toggle cycles
**system → light → dark** and persists an explicit choice to `localStorage`; in system mode
it tracks the OS setting live.

## Colors

The palette is **Catppuccin** — a low-saturation, developer-native scheme. It was chosen
because the audience lives in editors and terminals, and it ships a complete, considered
light/dark pair so the palette never has to be hand-composed.

**One accent — Mauve.** Blue reads as default and disappears; Mauve is the unmistakable
"this person runs Catppuccin everywhere" signal while staying restrained. The semantic
callout hues (blue/green/red/sky/peach) are functional, not decorative, and don't count as
second accents.

**Contrast rule (important):** Catppuccin is deliberately low-contrast. Text tokens map to
**Text / Subtext** only — **never to Overlay or Surface**, which are reserved for borders and
fills. Primary text and descriptions clear WCAG AA/AAA; the softest secondary meta sits just
at the AA line by design.

Every token has a Latte (light) and Macchiato (dark) value:

| Token        | Role                                | Latte (light) | Macchiato (dark) |
| ------------ | ----------------------------------- | ------------- | ---------------- |
| `accent`     | single accent (Mauve)               | `#8839ef`     | `#c6a0f6`        |
| `accentWarm` | drafts / warnings (Peach)           | `#fe640b`     | `#f5a97f`        |
| `background` | page / reading surface (Base)       | `#eff1f5`     | `#24273a`        |
| `surface`    | cards, header, panels (Mantle)      | `#e6e9ef`     | `#1e2030`        |
| `surfaceAlt` | insets, hover fills (Crust)         | `#dce0e8`     | `#181926`        |
| `ink`        | primary text (Text)                 | `#4c4f69`     | `#cad3f5`        |
| `muted`      | descriptions (Subtext1)             | `#5c5f77`     | `#b8c0e0`        |
| `soft`       | secondary meta (Subtext0)           | `#6c6f85`     | `#a5adcb`        |
| `line`       | borders (Surface0)                  | `#ccd0da`     | `#363a4f`        |
| `lineStrong` | hover / stronger borders (Surface1) | `#bcc0cc`     | `#494d64`        |

## Typography

Two families, split by job — **not** a single all-mono face (which was considered and
rejected: monospace Hangul and fixed-width prose hurt long-form bilingual reading).

- **Pretendard** — prose and UI. A proportional sans with first-class **Korean + Latin**
  coverage, loaded via its official jsDelivr **dynamic-subset** CDN so the browser downloads
  only the glyphs a page actually uses (~100–300 KB, not megabytes). Used for body text and
  all headings, including Korean titles.
- **D2Coding** — code and **structural accents**. A Korean coding font, **self-hosted** as a
  small subset (Regular + Bold, ~750 KB) with `local()` first, so anyone who has it installed
  (its natural audience — it's the author's IDE font) downloads nothing.

**Structural accents** rendered in D2Coding give the page an "engineering console" texture
without sacrificing readability: eyebrows/labels, nav links, dates, tags, post/article
metadata, the TOC label, and of course inline and block code. Everything else stays
Pretendard.

The type scale is intentionally small: `display` (hero) → `heading` → `prose`/`body` →
`label`/`code`. (Collapsing the remaining ad-hoc sizes into a strict 5-step scale is a
tracked follow-up.)

## Layout

- **Content width:** `max-width` **1120px** for full-bleed sections (nav, hero, cards).
- **Reading width:** **680px** for article prose (~68 characters per line — the comfortable
  range), leaving generous margin inside the shell.
- Single centered column; sections separated by hairline rules, not boxes.
- Spacing follows a loose rem rhythm (`{spacing.xs}`–`{spacing.xl}`); lists and archives run
  denser, articles run airier.

## Elevation & Depth

**Borders only.** Hover box-shadows were removed across cards, nav, tag pills, and code
frames — flat surfaces separated by 1px `{colors.line}` borders, with hover promoting the
border to `{colors.lineStrong}`. This is the primary enforcement of the "never a
product-designer site" rule: no drop shadows, no gradients, no glow.

The **one** depth cue kept is a subtle `backdrop-filter: blur` on the sticky header, purely
for legibility as content scrolls under it.

## Shapes

- Corner radius **8px** (`{rounded.md}`) for cards, buttons, the theme toggle, and code
  blocks — friendly but consistent (kept from the prior design by choice).
- **Pills** (`{rounded.full}`) for tags and filter chips.
- Small radius **5px** (`{rounded.sm}`) for inline code and `<kbd>`.

## Components

- **themeToggle** — 2.3rem square button in the header. Cycles system → light → dark; shows a
  monitor / sun / moon icon for the active preference. Default shows the monitor icon and
  follows the OS; without JavaScript the page falls back to the dark theme.
- **card** — post/section/project cards: `{colors.surface}` fill, `{colors.line}` border,
  `{rounded.md}`. Hover promotes the border to `{colors.lineStrong}` (no shadow).
- **callout** — MDX callouts share one shape; the left border and marker take a per-type hue
  (decision → `{colors.infoBlue}`, tip → `{colors.successGreen}`, danger → `{colors.dangerRed}`,
  todo → `{colors.sky}`, question → `{colors.accent}`, warning → `{colors.accentWarm}`).
- **codeBlock** — Expressive Code themed with **catppuccin-latte / catppuccin-macchiato**,
  following the same `[data-theme]` toggle, rendered in **D2Coding**, with decorative frame
  shadows removed.
- **tag** — pill with `{colors.surface}` fill and `{colors.line}` border; the checked filter
  state fills with `{colors.accent}` and white text.
- **navLink** — `{colors.muted}` in **D2Coding**; hover/active fills `{colors.surfaceAlt}`
  with `{colors.ink}` text.
- **mermaid** — diagrams read live CSS variables, so they follow the theme and **re-render on
  toggle** (rather than baking one palette into the SVG). Nodes/text are neutral
  (`surfaceAlt` / `ink`); **flow edges and arrowheads use `{colors.accent}`** to mark
  direction. Per-diagram `style` / `classDef` / `linkStyle` overrides still win.

## Do's and Don'ts

**Do**

- Use Pretendard for prose and headings; D2Coding for code and structural accents.
- Keep exactly one accent (Mauve). Add color only through the functional callout hues.
- Separate surfaces with borders; promote the border on hover.
- Map muted text to Subtext tokens so contrast holds; let code and diagrams follow the toggle.
- Pick theme-legible colors for hand-styled Mermaid diagrams (Catppuccin mid-tones work in
  both modes).

**Don't**

- Don't introduce drop shadows, gradients, glows, 3D, or motion — that's the identity we
  reject.
- Don't use Overlay or Surface colors for text (they fail contrast).
- Don't add a second accent color.
- Don't go all-monospace for prose — it hurts bilingual long-form reading.
- Don't hardcode diagram colors that only work in one theme.
