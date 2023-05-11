import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface ArticleProps
  extends HTMLAttributes<HTMLDivElement> {}

const Article = ({
  children,
  className,
  ...props
}: ArticleProps) => {
  return (
    <article
      className={clsx(
        "[&_p]:mt-4 [&_p]:md:mt-8 [&_pre]:mt-4 [&_pre]:md:mt-8",
        className
      )}
      {...props}
    >
      {children}
    </article>
  );
};

export default Article;
