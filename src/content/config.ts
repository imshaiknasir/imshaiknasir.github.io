import { defineCollection, z } from 'astro:content';

// Define the blog collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
    minutesRead: z.number().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

// Export the collections object
export const collections = {
  'blog': blogCollection,
}; 