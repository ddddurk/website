import { LINKS_EMAIL, LINKS_GITHUB } from "@src/lib";
import clsx from "clsx";

import { LinkExternal } from "./LinkExternal";
import { LinkHover } from "./LinkHover";

const links = {
  external: [
    { href: LINKS_EMAIL, text: "Contact" },
    {
      href: LINKS_GITHUB,
      target: "_blank",
      text: "GitHub"
    }
  ],
  internal: [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
    { href: "/work", text: "Work" }
  ]
};

const mediaQueryClasses = {
  0: "min-[365px]:grid",
  1: "min-[530px]:grid"
};

export const Navigation = () => {
  return (
    <nav className="mb-16 md:mb-24 grid grid-cols-[1fr,auto] items-center gap-x-4 md:gap-x-6">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(0,max-content))] items-center gap-x-4 text-xl font-medium md:gap-x-6 md:text-2xl">
        {links.internal.map(({ text, ...props }) => (
          <li key={text}>
            <LinkHover {...props}>{text}</LinkHover>
          </li>
        ))}
      </ul>
      <ul className="grid w-fit items-center gap-x-4 text-sm min-[530px]:grid-cols-2 md:gap-x-6 md:text-base">
        {links.external.map(({ text, ...props }, i) => (
          <li
            className={clsx(
              "hidden",
              mediaQueryClasses[i as 0 | 1]
            )}
            key={text}
          >
            <LinkExternal
              className="w-fit text-sm md:!gap-8 md:text-base"
              {...props}
            >
              {text}
            </LinkExternal>
          </li>
        ))}
      </ul>
    </nav>
  );
};
