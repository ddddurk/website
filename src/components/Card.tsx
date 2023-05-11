import clsx from "clsx";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

export interface CardProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const Card = ({
  children,
  className,
  href,
  ...props
}: CardProps) => {
  return (
    <Link
      className={clsx(
        "rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50 md:p-6",
        className
      )}
      href={href || ""}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Card;
