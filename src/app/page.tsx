import {
  CardBlog,
  CardList,
  CardWork,
  LinkHover,
  MDX
} from "@src/components";
import {
  fetchBlogLatest,
  fetchCodeByTitle,
  fetchWorkIsFeatured
} from "@src/lib";
import type { NextPage } from "next";
import { HiArrowRight } from "react-icons/hi2";

const Page: NextPage = () => {
  const cli = fetchCodeByTitle("CLI");

  return (
    <div className="grid gap-y-12 md:gap-y-16">
      <MDX code={cli?.body.code || ""} />
      <div className="grid gap-y-4 md:gap-y-8">
        <CardList>
          {fetchBlogLatest().map((blog) => (
            <CardBlog blog={blog} key={blog.title} />
          ))}
        </CardList>
        <LinkHover
          className="grid grid-cols-[auto,auto] gap-x-2 items-center ml-auto font-medium text-xl md:text-2xl"
          href="/blog"
        >
          <span>Blog</span>
          <HiArrowRight />
        </LinkHover>
      </div>
      <div className="grid gap-y-4 md:gap-y-8">
        <CardList>
          {fetchWorkIsFeatured().map((work) => (
            <CardWork key={work.title} work={work} />
          ))}
        </CardList>
        <LinkHover
          className="grid grid-cols-[auto,auto] gap-x-2 items-center ml-auto font-medium text-xl md:text-2xl"
          href="/work"
        >
          <span>Work</span>
          <HiArrowRight />
        </LinkHover>
      </div>
    </div>
  );
};

export default Page;
