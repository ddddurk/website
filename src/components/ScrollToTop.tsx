"use client";

import { useScroll } from "@src/hooks";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import { HiArrowSmallUp } from "react-icons/hi2";

export const ScrollToTop = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [scroll] = useScroll({ behavior: "smooth", top: 0 });

  return (
    <button
      className={clsx(
        "grid grid-cols-[auto,auto] gap-2 items-center",
        className
      )}
      onClick={() => scroll()}
      {...props}
    >
      <span className="w-full">Top</span>
      <HiArrowSmallUp />
    </button>
  );
};