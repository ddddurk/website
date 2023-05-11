import { polymorph } from "@dddstack/polymorph-react";
import clsx from "clsx";
import type { HTMLAttributes } from "react";

const PolymorphGridComplex = polymorph(
  ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => ({
    ...props,
    className: clsx(
      "grid grid-cols-[1fr,min(40rem,100%),1fr] [&>*]:col-span-1 [&>*]:col-start-2 xl:grid-cols-[1fr,minmax(auto,13.34rem),min(40rem,100%),minmax(auto,13.34rem),1fr] gap-y-4 md:gap-y-8 xl:[&>*]:col-start-3",
      className
    )
  })
)("div");

export default PolymorphGridComplex;
