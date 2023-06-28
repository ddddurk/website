import {
  fetchBlog,
  fetchWorkWithContent,
  metadata
} from "@src/lib";

const sitemap = () =>
  [
    "",
    "blog",
    "work",
    ...fetchBlog().map((blog) => blog.slug),
    ...fetchWorkWithContent().map((work) => work.slug)
  ].map((route) => ({
    url: `${metadata.openGraph?.url}/${route}`,
    lastModified: new Date().toISOString().split("T")[0]
  }));

export default sitemap;
