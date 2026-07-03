import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
	loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		section: z.enum(['light-notes', 'field-logs', 'deep-dives']),
		tags: z.array(z.string()).default([]),
		series: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { writing };
