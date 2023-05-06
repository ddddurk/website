"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes } from "react";

export const LinkHover = ({
  children,
  className,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isActive = usePathname() === href;

  return (
    <Link
      className={clsx(
        "p-1",
        isActive
          ? "text-gray-800"
          : "text-gray-500 hover:text-gray-800",
        className
      )}
      href={href ?? ""}
      {...props}
    >
      {children}
    </Link>
  );
};
