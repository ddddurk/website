import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface CardNameProps
  extends HTMLAttributes<HTMLSpanElement> {}

const CardName = ({
  children,
  className,
  ...props
}: CardNameProps) => {
  return (
    <span className={clsx("md:text-xl", className)} {...props}>
      {children}
    </span>
  );
};

export default CardName;
