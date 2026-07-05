import { type CollectionEntry, getCollection } from "astro:content";

export type WritingEntry = CollectionEntry<"writing">;
export type WritingSectionKey = WritingEntry["data"]["section"];

export interface TagSummary {
  name: string;
  slug: string;
  count: number;
}

export function getWritingUrl(entry: WritingEntry) {
  return `/writing/${entry.id}/`;
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

export function isPublished(entry: WritingEntry) {
  return import.meta.env.DEV || !entry.data.draft;
}

export async function getPublishedWriting() {
  const entries = await getCollection("writing", isPublished);

  return entries.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export async function getWritingBySection(section: WritingSectionKey) {
  const entries = await getPublishedWriting();

  return entries.filter((entry) => entry.data.section === section);
}

export function getTagSummaries(posts: WritingEntry[]) {
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
  return getTagSummaries(await getPublishedWriting());
}

export function getWritingByTagSlug(posts: WritingEntry[], slug: string) {
  return posts.filter((post) => post.data.tags.some((tag) => getTagSlug(tag) === slug));
}

export function getSectionLabel(section: WritingSectionKey) {
  const labels: Record<WritingSectionKey, string> = {
    "light-notes": "Light Notes",
    "field-logs": "Field Logs",
    "deep-dives": "Deep Dives",
  };

  return labels[section];
}
