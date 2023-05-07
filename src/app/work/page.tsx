import { Cards, CardWork } from "@src/components";
import { fetchWork } from "@src/lib";
import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <Cards as="main">
      {fetchWork().map((work) => (
        <CardWork key={work.title} work={work} />
      ))}
    </Cards>
  );
};

export default Page;
