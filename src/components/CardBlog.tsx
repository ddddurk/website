import type { Blog } from "@contentlayer";
import { format, parseISO } from "date-fns";
import Link from "next/link";

import CardText from "./CardText";
import CardTitle from "./CardTitle";
import { Card } from "./ddddurkUi";
import Views from "./Views";

export interface CardBlogProps {
  blog: Blog;
}

const CardBlog = ({ blog }: CardBlogProps) => {
  return (
    <Link href={`/${blog.slug}`}>
      <Card className="grid gap-y-1 md:gap-y-2" type="hover">
        <CardTitle>{blog.title}</CardTitle>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(0,max-content))] items-center gap-x-2 text-sm font-light text-gray-500 md:text-base">
          <span>
            {format(parseISO(blog.date), "LLLL d, yyyy")}
          </span>
          <span>&#x2022;</span>
          <Views slug={blog.slug} />
        </div>
        <CardText>{blog.description}</CardText>
      </Card>
    </Link>
  );
};

export default CardBlog;
