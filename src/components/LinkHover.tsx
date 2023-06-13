"use client";

import { Hover } from "@ddddurk/ui";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes } from "react";

export interface LinkHoverProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const LinkHover = ({
  children,
  className,
  href,
  ...props
}: LinkHoverProps) => {
  const isActive = usePathname() === href;

  return (
    <Link href={href ?? ""} {...props}>
      <Hover
        as="span"
        className={clsx(
          "w-fit p-1",
          { "text-gray-900": isActive },
          className
        )}
      >
        {children}
      </Hover>
    </Link>
  );
};

export default LinkHover;
