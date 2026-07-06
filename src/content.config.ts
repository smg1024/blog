import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({ base: "./src/content/writing", pattern: "**/*.{md,mdx}" }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      section: z.enum(["light-notes", "field-logs", "deep-dives"]),
      tags: z.array(z.string().trim().min(1, "Tags cannot be empty.")).min(1, "At least one tag is required."),
      series: z.string().optional(),
      draft: z.boolean().default(false),
    })
    .superRefine((data, context) => {
      if (!data.draft && data.publishedAt.getTime() > Date.now()) {
        context.addIssue({
          code: "custom",
          path: ["publishedAt"],
          message: "Future publication dates are only allowed when draft is true.",
        });
      }
    }),
});

export const collections = { writing };
