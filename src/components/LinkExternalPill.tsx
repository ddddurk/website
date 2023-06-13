import { Pill } from "@ddddurk/ui";
import clsx from "clsx";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export interface LinkExternalPillProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const LinkExternalPill = ({
  children,
  className,
  href,
  ...props
}: LinkExternalPillProps) => {
  return (
    <Link className="grid" href={href ?? ""} {...props}>
      <Pill
        className={clsx(
          "w-full grid grid-cols-[1fr,auto] items-center gap-x-2",
          className
        )}
      >
        <span className="w-full">{children}</span>
        <HiOutlineArrowUpRight />
      </Pill>
    </Link>
  );
};

export default LinkExternalPill;
