import clsx from "clsx";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

export const Card = ({
  children,
  className,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      className={clsx(
        "rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50 md:p-6",
        className
      )}
      href={href ?? ""}
      {...props}
    >
      {children}
    </Link>
  );
};
