import { allBlogs } from "@contentlayer";
import { compareDesc } from "date-fns";

export const fetchBlog = () =>
  allBlogs
    .filter((blog) => !blog.isDraft)
    .sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date))
    );
