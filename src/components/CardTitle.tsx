import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface CardTitleProps
  extends HTMLAttributes<HTMLSpanElement> {}

const CardTitle = ({
  children,
  className,
  ...props
}: CardTitleProps) => {
  return (
    <span
      className={clsx(
        "text-gray-900 text-xl font-medium md:text-2xl",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default CardTitle;
