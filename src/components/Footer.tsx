import {
  LINKS_DDDSTACK,
  LINKS_EMAIL,
  LINKS_GITHUB,
  LINKS_LINKEDIN
} from "@src/lib";
import clsx from "clsx";
import type { HTMLAttributes } from "react";

import { LinkExternal } from "./LinkExternal";
import { LinkHover } from "./LinkHover";
import { ScrollToTop } from "./ScrollToTop";

const links = {
  external: [
    { href: LINKS_EMAIL, text: "Contact" },
    {
      href: LINKS_GITHUB,
      target: "_blank",
      text: "GitHub"
    },
    {
      href: LINKS_LINKEDIN,
      target: "_blank",
      text: "LinkedIn"
    },
    {
      href: LINKS_DDDSTACK,
      target: "_blank",
      text: "dddstack"
    }
  ],
  internal: [
    {
      href: "/colors",
      text: "Colors"
    },
    {
      href: "/sitemap",
      text: "Sitemap"
    }
  ]
};

export const Footer = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <footer
      className={clsx(
        "mb-12 mt-32 grid gap-4 text-gray-500 text-sm md:mb-16 md:mt-40 md:gap-8 md:text-base",
        className
      )}
      {...props}
    >
      <ul className="grid grid-cols-2 items-center gap-4 md:grid-cols-4 md:gap-6">
        {links.external.map(({ text, ...props }) => (
          <li key={text}>
            <LinkExternal {...props}>{text}</LinkExternal>
          </li>
        ))}
      </ul>
      <ul className="grid grid-cols-[1fr,auto,auto] gap-x-4">
        {links.internal.map(({ text, ...props }) => (
          <li key={text}>
            <LinkHover {...props}>{text}</LinkHover>
          </li>
        ))}
        <li>
          <ScrollToTop className="hover:text-gray-800" />
        </li>
      </ul>
    </footer>
  );
};
