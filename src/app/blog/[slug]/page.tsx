import { Article, MDX, Views } from "@src/components";
import { fetchBlog, fetchBlogBySlug } from "@src/lib";
import { format, parseISO } from "date-fns";
import type { NextPage } from "next";

interface PageParams {
  slug: string;
}

export const generateStaticParams = async (): Promise<
  PageParams[]
> => fetchBlog().map((blog) => ({ slug: blog.slug }));

export const generateMetadata = async ({
  params
}: {
  params: PageParams;
}) => {
  const blog = fetchBlogBySlug(`blog/${params.slug}`);

  return {
    description: blog?.description,
    title: blog?.title
  };
};

const Page: NextPage<{ params: PageParams }> = ({ params }) => {
  const { slug } = params;

  const blog = fetchBlogBySlug(`blog/${slug}`);

  if (!blog) return null;

  return (
    <>
      <h1 className="xl:text-center xl:!col-start-2 xl:!col-span-3">
        {blog.title}
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(0,max-content))] items-center gap-x-2 font-light text-gray-500 xl:justify-center md:text-xl">
        <span>
          {format(parseISO(blog.date), "LLLL d, yyyy")}
        </span>
        <span>&#x2022;</span>
        <Views options={{ post: true }} slug={blog.slug} />
      </div>
      <Article>
        <MDX code={blog.body.code} />
      </Article>
    </>
  );
};

export default Page;
