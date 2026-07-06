# Dev with Min

Personal developer blog for <https://blog.ridewithmin.com>.

This site is built with Astro and is intended to become a long-term record of developer experience: light notes, field logs, deep dives, projects, CV, setup, and timeline.

## Structure

- `/writing` - writing overview
- `/notes` - light notes
- `/logs` - field logs
- `/deep-dives` - long-form heavy writing
- `/tags` - posts grouped by tag
- `/series` - connected writing tracks
- `/archive` - full post index
- `/projects` - portfolio records
- `/profile` - developer profile
- `/cv` - formal career page
- `/timeline` - developer history
- `/uses` - hardware, software, and homelab setup

## Writing

Posts live in `src/content/writing`.

Create a draft from one of the writing templates:

```sh
bun run new:post -- --section field-logs --title "Deploying the blog" --tags astro,nix,homelab
```

The script writes a Markdown draft with `draft: true`. Pass `--publish` only when the new post should be immediately public. Templates live in `templates/writing`.
When `--tags` is omitted, the draft starts with placeholder tags `tag1`, `tag2`, and `tag3`.
Pass `--mdx` when a post needs component-based writing blocks.

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

MDX writing blocks:

```mdx
import Note from "../../components/writing/Note.astro";
import Decision from "../../components/writing/Decision.astro";

<Note title="Operational note">
  Keep quick context close to the command or diagram it explains.
</Note>

<Decision title="Deployment choice">
  I chose the simpler deployment path until the blog needs dynamic rendering.
</Decision>
```

Inline code, fenced code blocks, and `<kbd>` keyboard tokens are styled automatically inside article prose.

## Commands

```sh
bun install
bun run dev
bun run build
bun run preview
```

RSS is available at `/rss.xml`. Sitemap generation is configured for `https://blog.ridewithmin.com`.
