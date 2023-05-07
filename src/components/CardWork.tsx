import type { Work } from "@contentlayer";
import clsx from "clsx";
import type { AnchorHTMLAttributes } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

import { Card } from "./Card";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  work: Work;
}

export const CardWork = ({
  className,
  work,
  ...props
}: Props) => {
  return (
    <Card
      className={clsx(
        "grid grid-cols-[1fr,auto] gap-x-4 gap-y-1",
        className
      )}
      href={work.url}
      target={work.target}
      {...props}
    >
      <h3 className="overflow-x-hidden text-ellipsis text-xl font-medium md:text-2xl">
        {work.title}
      </h3>
      <div>
        {work.target === "_blank" && (
          <HiOutlineArrowUpRight className="text-gray-500" />
        )}
      </div>
      <p className="text-gray-500 md:text-lg">
        {work.description}
      </p>
    </Card>
  );
};
