import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface CardTextProps
  extends HTMLAttributes<HTMLSpanElement> {}

const CardText = ({
  children,
  className,
  ...props
}: CardTextProps) => {
  return (
    <p className={clsx("leading-normal", className)} {...props}>
      {children}
    </p>
  );
};

export default CardText;
