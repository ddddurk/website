import LinkExternalPill from "../LinkExternalPill";

const links = [
  { href: "https://github.com/ddddurk/colors", text: "GitHub" },
  {
    href: "https://www.npmjs.com/package/@ddddurk/colors",
    text: "NPM"
  },
  {
    href: "https://ui.ddddurk.com",
    text: "Storybook"
  }
];

const UI = () => {
  return (
    <ul className="mt-4 mb-8 grid grid-cols-3 items-center gap-4 md:gap-6 text-sm md:text-base">
      {links.map(({ text, ...props }) => (
        <li key={text}>
          <LinkExternalPill {...props}>{text}</LinkExternalPill>
        </li>
      ))}
    </ul>
  );
};

export default UI;
