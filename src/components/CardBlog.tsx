import type { Blog } from "@contentlayer";
import { format, parseISO } from "date-fns";

import Card from "./Card";
import CardTitle from "./CardTitle";
import Views from "./Views";

export interface CardBlogProps {
  blog: Blog;
}

const CardBlog = ({ blog }: CardBlogProps) => {
  return (
    <Card
      className="grid gap-y-1 md:gap-y-2"
      href={`/${blog.slug}`}
    >
      <CardTitle>{blog.title}</CardTitle>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(0,max-content))] items-center gap-x-2 text-sm font-light text-gray-500 md:text-base">
        <span>
          {format(parseISO(blog.date), "LLLL d, yyyy")}
        </span>
        <span>&#x2022;</span>
        <Views slug={blog.slug} />
      </div>
      <p>{blog.description}</p>
    </Card>
  );
};

export default CardBlog;
