import type { Work } from "@contentlayer";
import { Card } from "@ddddurk/ui";
import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

import CardName from "./CardName";
import CardText from "./CardText";
import CardTitle from "./CardTitle";

export interface CardWorkProps {
  work: Work;
}

const CardWork = ({ work }: CardWorkProps) => {
  const hasContent = work.body.raw.length > 0;

  return (
    <Link
      href={hasContent ? `/${work.slug}` : work.url}
      target={hasContent ? "_self" : "_blank"}
    >
      <Card
        className="group grid grid-cols-[1fr,auto] gap-x-4 gap-y-1 md:gap-y-2"
        hover
      >
        <div className="grid grid-cols-[auto,1fr] gap-x-2 items-center">
          <CardTitle className="!mt-0 overflow-x-hidden text-ellipsis">
            {work.title}
          </CardTitle>
          {work.name && (
            <CardName className="hidden md:block">
              {work.name}
            </CardName>
          )}
        </div>
        <div>
          {!hasContent && (
            <HiOutlineArrowUpRight className="text-gray-500 group-hover:text-gray-900" />
          )}
        </div>
        <CardText>{work.description}</CardText>
      </Card>
    </Link>
  );
};

export default CardWork;
