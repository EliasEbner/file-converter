import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      tags: z.array(z.string()).optional(),
      image: image(),
      imageAlt: z.string().optional(),
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = {
  blog: blogCollection,
};
