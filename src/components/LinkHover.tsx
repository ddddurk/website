"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes } from "react";

export interface LinkHoverProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const LinkHover = ({
  children,
  href,
  ...props
}: LinkHoverProps) => {
  const isActive = usePathname() === href;

  return (
    <Link
      className={clsx(
        "p-1",
        isActive
          ? "text-gray-900"
          : "text-gray-500 hover:text-gray-900"
      )}
      href={href ?? ""}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkHover;
