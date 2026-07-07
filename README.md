# Dev with Min

Personal developer blog for <https://blog.ridewithmin.com>.

This site is built with Astro and is intended to become a long-term record of developer experience: light notes, field logs, deep dives, projects, CV, setup, and timeline.

## Structure

- `/blog` - blog overview
- `/blog/notes` - light notes
- `/blog/logs` - field logs
- `/blog/deep-dives` - long-form heavy blog
- `/tags` - posts grouped by tag
- `/series` - connected blog tracks
- `/archive` - full post index
- `/projects` - portfolio records
- `/profile` - developer profile
- `/cv` - formal career page
- `/timeline` - developer history
- `/uses` - hardware, software, and homelab setup

## Blog

Posts live in `src/content/blog`.

Create a draft from one of the blog templates:

```sh
bun run new:post -- --section field-logs --title "Deploying the blog" --tags astro,nix,homelab
```

The script writes an MDX draft with `draft: true`. Pass `--md` only when a post should be plain Markdown, and pass `--publish` only when the new post should be immediately public. Templates live in `templates/blog`.
When `--tags` is omitted, the draft starts with placeholder tags `tag1`, `tag2`, and `tag3`.
MDX is the default so posts can use component-based blog blocks.

Required frontmatter:

```yaml
title: Opening Dev with Min
description: A short post summary.
publishedAt: 2026-07-03
section: field-logs # light-notes | field-logs | deep-dives
tags:
  - astro
draft: false
```

MDX blog blocks:

```mdx
import Note from "../../components/blog/Note.astro";
import Tip from "../../components/blog/Tip.astro";
import Question from "../../components/blog/Question.astro";
import Decision from "../../components/blog/Decision.astro";
import Reference from "../../components/blog/Reference.astro";
import Warning from "../../components/blog/Warning.astro";
import Todo from "../../components/blog/Todo.astro";
import Danger from "../../components/blog/Danger.astro";
import Mermaid from "../../components/blog/Mermaid.astro";

<Note title="Operational note">
  Keep quick context close to the command or diagram it explains.
</Note>

<Decision title="Deployment choice">
  I chose the simpler deployment path until the blog needs dynamic rendering.
</Decision>

<Tip>Use this for small practical advice.</Tip>
<Question>Use this to frame an unresolved idea.</Question>
<Todo>Use this to capture follow-up work.</Todo>
<Danger>Use this for high-impact risks.</Danger>

<Mermaid
  title="Publishing path"
  chart={`
flowchart LR
  Draft[MDX draft] --> Build[Astro build]
  Build --> Package[Nix package]
  Package --> Homelab[Homelab deploy]
`}
/>
```

Available callout wrappers: `Note`, `Tip`, `Question`, `Decision`, `Reference`, `Warning`, `Todo`, and `Danger`.
Use `Mermaid` for architecture, flow, sequence, and systems diagrams in MDX posts.

Inline code, fenced code blocks, and `<kbd>` keyboard tokens are styled automatically inside article prose.

## Commands

```sh
bun install
bun run dev
bun run build
bun run check:public
bun run preview
make deps
make
```

RSS is available at `/rss.xml`. Sitemap generation is configured for `https://blog.ridewithmin.com`.

## Publishing checks

Use `bun run check:public` before publishing. It builds the site and checks the generated `dist/` output for the
expected public files, production metadata, sitemap/robots links, RSS metadata, and draft-content leaks.

Use `nix build .#` to verify the static site package that the homelab can import. The flake calls `package.nix`,
which uses the `Makefile` build and install targets. The built site is available inside the package at
`share/dev-with-min`, with a convenience `public` symlink.
