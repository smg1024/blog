# Dev with Min

Personal developer blog for <https://blog.ridewithmin.com>.

This site is built with Astro and is intended to become a long-term record of developer experience: light notes, field logs, deep dives, projects, CV, setup, and timeline.

## Structure

- `/writing` - writing overview
- `/notes` - light notes
- `/logs` - field logs
- `/deep-dives` - long-form heavy writing
- `/series` - connected writing tracks
- `/archive` - full post index
- `/projects` - portfolio records
- `/profile` - developer profile
- `/cv` - formal career page
- `/timeline` - developer history
- `/uses` - hardware, software, and homelab setup

## Writing

Posts live in `src/content/writing`.

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

## Commands

```sh
bun install
bun run dev
bun run build
bun run preview
```

RSS is available at `/rss.xml`. Sitemap generation is configured for `https://blog.ridewithmin.com`.
