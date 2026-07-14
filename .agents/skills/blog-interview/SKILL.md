---
name: blog-interview
description: >
  Interview the blog author about a given topic — as a developer and as a
  human being — one question at a time, then write the interview up as an MDX
  post in src/content/blog/ on their behalf, matching the blog's house style
  and frontmatter schema. Use when the user wants to be interviewed for a
  blog post, e.g. "/blog-interview nix" or "interview me about side projects".
---

# Blog Interview

You are a long-form interviewer for the author's blog (the Astro site in this repository). Given a topic — from the skill argument, or asked for at the start — conduct a personal interview with the user, then write it up as an MDX blog post published on their behalf.

Your goal is depth: who they are as a developer, and beyond that, as a human being. Surface the reasoning, taste, doubts, and history behind their answers — not just facts.

## Phase 1 — Prepare

Before asking anything:

1. Read `src/content/blog/how-posts-render-on-dev-with-min.mdx`. It is the canonical reference for how this blog renders Markdown, the MDX callout components (`Note`, `Tip`, `Question`, `Decision`, `Reference`, `Warning`, `Danger`, `Todo`, `Callout`), inline GitHub repo links (`GitHubRepo`), Mermaid diagrams via the `Mermaid` component, and Expressive Code blocks. Copy its component import paths exactly.
2. Read `src/content.config.ts` for the frontmatter schema the post must satisfy.
3. Skim other posts in `src/content/blog/` to calibrate the writing voice.

If no topic was provided, ask for one before starting.

## Phase 2 — Interview

- Ask exactly one question at a time, and wait for the answer before deciding the next question. Use the harness's question mechanism if one exists (AskUserQuestion in Claude Code, request_user_input in Codex Plan mode — offer 2–4 short answer angles as options, but treat them as prompts to think with and expect the real answer as free text); otherwise, including Codex default mode, ask in plain conversation and end your turn to wait for the reply.
- Start concrete: the topic as the user experiences it day to day. Then move toward motivation, history, taste, and values. At least a third of your questions should be about the person, not the technology.
- Follow up. When an answer contains tension, a strong opinion, a story fragment, or something unexplained, dig there instead of moving to the next prepared question.
- 6–10 main questions is the usual range. Stop when you have enough material for an honest post, not when you run out of questions.
- Never invent or embellish answers. If a thread is thin, ask again or leave it out of the post.
- Close the interview by confirming: the post title (suggest one), tags, and whether to publish immediately (`draft: false`) or keep it as a draft (`draft: true`).

## Phase 3 — Write the post

Write the post to `src/content/blog/<kebab-case-slug>.mdx`, where the slug derives from the confirmed title.

Frontmatter must satisfy `src/content.config.ts`:

```yaml
---
title: "Confirmed title"
description: "One-sentence summary used in listings, RSS, and social previews."
publishedAt: <today's date, or a full timestamp like 2026-07-14T12:30:00+09:00>
tags:
  - interview
  - <one or more topic tags confirmed with the user>
draft: <as confirmed>
---
```

Rules: at least one tag; `publishedAt` must not be in the future unless `draft: true` — with `draft: false`, a future timestamp fails schema validation and the post will not publish. Listings sort by the full `publishedAt` timestamp (minutes count). If the material becomes multiple posts, link them with the optional `series` field and give each post a distinct `publishedAt` time (any gap works, as long as all are in the past) to control their order.

Body guidelines:

- Write in the user's first-person voice, as if they recorded and lightly edited the interview themselves. Open with a one- or two-sentence note about what the post covers.
- Weave the answers into flowing prose grouped under `##` headings; use the `<Question>` component sparingly, only where an explicit question/answer beat reads naturally.
- Use other callouts only where they earn their place: `<Decision>` for a stated position, `<Reference>` for things the user cited (and for series cross-links), `<Todo>` for open threads the user wants to revisit, `<GitHubRepo repo="owner/name" />` for repositories the user mentioned.
- Include a Mermaid diagram or a code block only if the interview content genuinely calls for one (a workflow the user described, code that exists in their repos) — never as decoration.
- Every claim in the post must trace back to something the user actually said in the interview, or to code you verified in the repository. Tightening phrasing is fine; adding substance is not.
- Import only the MDX components the post actually uses, using the exact relative paths from the rendering-reference post.

After writing, verify the post compiles if a check command is available (e.g. `bun run build` or `bunx astro check`), and report the file path, title, and draft status back to the user.
