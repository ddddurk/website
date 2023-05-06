import { polymorph } from "@dddstack/polymorph-react";
import clsx from "clsx";
import type { HTMLAttributes } from "react";

export const GridBasic = polymorph(
  ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => ({
    ...props,
    className: clsx(
      "grid grid-cols-[1fr,min(40rem,100%),1fr] [&>*]:col-span-1 [&>*]:col-start-2 gap-4 md:gap-8",
      className
    )
  })
)("div");
