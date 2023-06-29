import { CardList, CardWork } from "@src/components";
import { fetchWork } from "@src/lib";
import type { NextPage } from "next";

export const metadata = {
  title: "Work"
};

const Page: NextPage = () => {
  return (
    <CardList>
      {fetchWork().map((work) => (
        <CardWork key={work.title} work={work} />
      ))}
    </CardList>
  );
};

export default Page;
