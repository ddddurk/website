import { fetchBlog } from "./fetchBlog";

export const fetchBlogLatest = (n = 1) =>
  fetchBlog().slice(0, n);
