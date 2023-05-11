import { CardList, CardWork } from "@components";
import { fetchWork } from "@lib";
import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <>
      <h1>Work</h1>
      <CardList>
        {fetchWork().map((work) => (
          <CardWork key={work.title} work={work} />
        ))}
      </CardList>
    </>
  );
};

export default Page;
