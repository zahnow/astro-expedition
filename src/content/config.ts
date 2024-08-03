// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().optional(),
    repo: z.string().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string()).optional()
  }),
});

const links = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    url: z.string()
  })
})

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects, links
};