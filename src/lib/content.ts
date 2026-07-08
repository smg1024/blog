import { type CollectionEntry, getCollection } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;

export interface TagSummary {
  name: string;
  slug: string;
  count: number;
}

export function getBlogUrl(entry: BlogEntry) {
  return `/blog/${entry.id}/`;
}

export function getTagSlug(tag: string) {
  return tag
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function getTagUrl(tag: string) {
  return `/tags/${getTagSlug(tag)}/`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

function sortBlog(entries: BlogEntry[]) {
  return entries.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export function isDraft(entry: BlogEntry) {
  return entry.data.draft;
}

export function isPublished(entry: BlogEntry) {
  return !entry.data.draft;
}

export function isVisibleBlog(entry: BlogEntry) {
  return import.meta.env.DEV || isPublished(entry);
}

export async function getPublishedBlog() {
  const entries = await getCollection("blog", isPublished);

  return sortBlog(entries);
}

export async function getVisibleBlog() {
  const entries = await getCollection("blog", isVisibleBlog);

  return sortBlog(entries);
}

export async function getDraftBlog() {
  if (!import.meta.env.DEV) {
    return [];
  }

  const entries = await getCollection("blog", isDraft);

  return sortBlog(entries);
}

export function getTagSummaries(posts: BlogEntry[]) {
  const tags = new Map<string, TagSummary>();

  for (const post of posts) {
    const postTags = new Set(post.data.tags.map((tag) => tag.trim()).filter(Boolean));

    for (const name of postTags) {
      const slug = getTagSlug(name);

      if (!slug) {
        continue;
      }

      const existing = tags.get(slug);

      if (existing) {
        existing.count += 1;
      } else {
        tags.set(slug, { name, slug, count: 1 });
      }
    }
  }

  return Array.from(tags.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export async function getPublishedTags() {
  return getTagSummaries(await getPublishedBlog());
}

export function getBlogByTagSlug(posts: BlogEntry[], slug: string) {
  return posts.filter((post) => post.data.tags.some((tag) => getTagSlug(tag) === slug));
}
