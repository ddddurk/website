import type { Work } from "@contentlayer";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

import Card from "./Card";
import CardTitle from "./CardTitle";

export interface CardWorkProps {
  work: Work;
}

const CardWork = ({ work }: CardWorkProps) => {
  const hasContent = work.body.raw.length > 0;

  return (
    <Card
      className="group grid grid-cols-[1fr,auto] gap-x-4 gap-y-1 md:gap-y-2"
      href={hasContent ? `/${work.slug}` : work.url}
      target={hasContent ? "_self" : "_blank"}
    >
      <CardTitle className="!mt-0 overflow-x-hidden text-ellipsis">
        {work.title}
      </CardTitle>
      <div>
        {!hasContent && (
          <HiOutlineArrowUpRight className="text-gray-500 group-hover:text-gray-900" />
        )}
      </div>
      <p>{work.description}</p>
    </Card>
  );
};

export default CardWork;
