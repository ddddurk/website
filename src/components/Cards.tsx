import { polymorph } from "@dddstack/polymorph-react";
import clsx from "clsx";
import type { HTMLAttributes } from "react";

export const Cards = polymorph(
  ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => ({
    ...props,
    className: clsx(
      "auto-rows-min grid gap-4 md:gap-8",
      className
    )
  })
)("div");
