import { polymorph } from "@dddstack/polymorph-react";
import clsx from "clsx";
import type { HTMLAttributes } from "react";

export const GridComplex = polymorph(
  ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => ({
    ...props,
    className: clsx(
      "grid grid-cols-[1fr,min(40rem,100%),1fr] [&>*]:col-span-1 [&>*]:col-start-2 xl:grid-cols-[1fr,minmax(auto,13.34rem),min(40rem,100%),minmax(auto,13.34rem),1fr] gap-4 md:gap-8 xl:[&>*]:col-start-3",
      className
    )
  })
)("div");
