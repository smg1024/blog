import { getCollection, type CollectionEntry } from 'astro:content';

export type WritingEntry = CollectionEntry<'writing'>;
export type WritingSectionKey = WritingEntry['data']['section'];

export function getWritingUrl(entry: WritingEntry) {
	return `/writing/${entry.id}/`;
}

export function formatDate(date: Date) {
	return new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	}).format(date);
}

export function isPublished(entry: WritingEntry) {
	return import.meta.env.DEV || !entry.data.draft;
}

export async function getPublishedWriting() {
	const entries = await getCollection('writing', isPublished);

	return entries.sort(
		(a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
	);
}

export async function getWritingBySection(section: WritingSectionKey) {
	const entries = await getPublishedWriting();

	return entries.filter((entry) => entry.data.section === section);
}

export function getSectionLabel(section: WritingSectionKey) {
	const labels: Record<WritingSectionKey, string> = {
		'light-notes': 'Light Notes',
		'field-logs': 'Field Logs',
		'deep-dives': 'Deep Dives',
	};

	return labels[section];
}
