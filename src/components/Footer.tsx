import {
  linkDddstack,
  linkEmail,
  linkGitHub,
  linkLinkedIn
} from "@src/lib";

import BackToTopButton from "./BackToTopButton";
import LinkExternalPill from "./LinkExternalPill";
import LinkHover from "./LinkHover";

const links = {
  external: [
    { href: linkEmail, text: "Contact" },
    {
      href: linkGitHub,
      target: "_blank",
      text: "GitHub"
    },
    {
      href: linkLinkedIn,
      target: "_blank",
      text: "LinkedIn"
    },
    {
      href: linkDddstack,
      target: "_blank",
      text: "dddstack"
    }
  ],
  internal: [
    {
      href: "/work/colors",
      text: "Colors"
    },
    {
      href: "/sitemap.xml",
      text: "Sitemap"
    }
  ]
};

const Footer = () => {
  return (
    <footer className="mb-12 mt-32 grid gap-6 text-sm md:mb-16 md:mt-40 md:gap-8 md:text-base">
      <ul className="grid grid-cols-2 items-center gap-4 md:grid-cols-4 md:gap-6">
        {links.external.map(({ text, ...props }) => (
          <li key={text}>
            <LinkExternalPill {...props}>
              {text}
            </LinkExternalPill>
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
          <BackToTopButton className="text-gray-500 hover:text-gray-900" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
