import { fetchBlog } from "./fetchBlog";

export const fetchBlogBySlug = (slug: string) =>
  fetchBlog().find((blog) => blog.slug === slug);
