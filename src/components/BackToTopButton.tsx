"use client";

import { useScroll } from "@hooks";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import { HiArrowSmallUp } from "react-icons/hi2";

export interface BackToTopButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const BackToTopButton = ({
  className,
  ...props
}: BackToTopButtonProps) => {
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

export default BackToTopButton;
