import { CardBlog, CardList } from "@components";
import { fetchBlog } from "@lib";
import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <>
      <h1>Blog</h1>
      <CardList>
        {fetchBlog().map((blog) => (
          <CardBlog blog={blog} key={blog.title} />
        ))}
      </CardList>
    </>
  );
};

export default Page;
