import { fetchBlog } from "./fetchBlog";

export const fetchBlogLatest = (n = 2) =>
  fetchBlog().slice(0, n);
