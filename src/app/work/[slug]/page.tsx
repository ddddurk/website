import { MDX } from "@src/components";
import { fetchWorkBySlug, fetchWorkWithContent } from "@src/lib";
import type { NextPage } from "next";

interface PageParams {
  slug: string;
}

export const generateStaticParams = async (): Promise<
  PageParams[]
> => fetchWorkWithContent().map((work) => ({ slug: work.slug }));

export const generateMetadata = async ({
  params
}: {
  params: PageParams;
}) => {
  const work = fetchWorkBySlug(`work/${params.slug}`);

  return {
    description: work?.description,
    title: work?.title
  };
};

const Page: NextPage<{ params: PageParams }> = ({ params }) => {
  const { slug } = params;

  const work = fetchWorkBySlug(`work/${slug}`);

  if (!work) return null;

  return (
    <>
      <h1>{work.title}</h1>
      <MDX code={work.body.code} />
    </>
  );
};

export default Page;
