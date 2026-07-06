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

The script writes an MDX draft with `draft: true`. Pass `--md` only when a post should be plain Markdown, and pass `--publish` only when the new post should be immediately public. Templates live in `templates/writing`.
When `--tags` is omitted, the draft starts with placeholder tags `tag1`, `tag2`, and `tag3`.
MDX is the default so posts can use component-based writing blocks.

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
import Tip from "../../components/writing/Tip.astro";
import Question from "../../components/writing/Question.astro";
import Decision from "../../components/writing/Decision.astro";
import Reference from "../../components/writing/Reference.astro";
import Warning from "../../components/writing/Warning.astro";
import Todo from "../../components/writing/Todo.astro";
import Danger from "../../components/writing/Danger.astro";
import Mermaid from "../../components/writing/Mermaid.astro";

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
bun run preview
```

RSS is available at `/rss.xml`. Sitemap generation is configured for `https://blog.ridewithmin.com`.
