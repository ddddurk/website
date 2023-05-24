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
        "[&_p]:mt-4 [&_p]:md:mt-8 [&_pre]:mt-4 [&_pre]:md:mt-8 [&_h2]:mt-12 [&_h2]:md:mt-16 [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:md:text-4xl [&_h2]:text-gray-900 [&_h3]:mt-8 [&_h3]:md:mt-12 [&_h3]:font-medium [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:text-gray-900 [&_a]:underline [&_a:hover]:text-black [&_a]:decoration-cyan-400/50 [&_a:hover]:decoration-cyan-400/80 [&_a]:underline-offset-4",
        className
      )}
      {...props}
    >
      {children}
    </article>
  );
};

export default Article;
