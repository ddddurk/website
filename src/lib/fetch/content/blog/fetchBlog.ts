import { allBlogs } from "@contentlayer";
import { compareDesc } from "date-fns";

export const fetchBlog = () =>
  allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
