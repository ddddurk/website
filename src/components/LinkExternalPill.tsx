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
    <Link
      className={clsx(
        "grid grid-cols-[1fr,auto] items-center gap-x-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900",
        className
      )}
      href={href ?? ""}
      {...props}
    >
      <span className="w-full">{children}</span>
      <HiOutlineArrowUpRight />
    </Link>
  );
};

export default LinkExternalPill;
