import { CardBlog, CardList } from "@src/components";
import { fetchBlog } from "@src/lib";
import type { NextPage } from "next";

export const metadata = {
  title: "Blog"
};

const Page: NextPage = () => {
  return (
    <CardList>
      {fetchBlog().map((blog) => (
        <CardBlog blog={blog} key={blog.title} />
      ))}
    </CardList>
  );
};

export default Page;
