import { MDX } from "@components";
import { fetchWorkBySlug, fetchWorkWithContent } from "@lib";
import type { NextPage } from "next";

interface PageParams {
  slug: string;
}

export const generateStaticParams = async (): Promise<
  PageParams[]
> => fetchWorkWithContent().map((work) => ({ slug: work.slug }));

const Page: NextPage<{ params: PageParams }> = ({ params }) => {
  const { slug } = params;

  const work = fetchWorkBySlug(`work/${slug}`);

  if (!work) return null;

  return <MDX code={work.body.code} />;
};

export default Page;
