import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { SITE } from "../data/site";
import { getPublishedWriting, getWritingUrl } from "../lib/content";

export const GET: APIRoute = async (context) => {
  const posts = await getPublishedWriting();

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site?.toString() ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: getWritingUrl(post),
      categories: post.data.tags,
    })),
  });
};
