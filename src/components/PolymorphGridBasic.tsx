import { polymorph } from "@dddstack/polymorph-react";
import clsx from "clsx";
import type { HTMLAttributes } from "react";

const PolymorphGridBasic = polymorph(
  ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => ({
    ...props,
    className: clsx(
      "grid grid-cols-[1fr,min(40rem,100%),1fr] [&>*]:col-span-1 [&>*]:col-start-2 gap-y-4 md:gap-y-8",
      className
    )
  })
)("div");

export default PolymorphGridBasic;
