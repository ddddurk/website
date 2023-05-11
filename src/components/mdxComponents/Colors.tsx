import ddddurkColors from "@ddddurk/colors/colors/colors.json";

import Color from "../Color";
import ColorList from "../ColorList";
import ColorPalette from "../ColorPalette";
import LinkExternalPill from "../LinkExternalPill";

const links = [
  { href: "", text: "Figma" },
  { href: "", text: "GitHub" },
  { href: "", text: "NPM" }
];

const Colors = () => {
  return (
    <>
      <ul className="my-8 grid grid-cols-3 items-center gap-4 md:gap-6">
        {links.map(({ text, ...props }) => (
          <li key={text}>
            <LinkExternalPill {...props}>
              {text}
            </LinkExternalPill>
          </li>
        ))}
      </ul>
      <ColorList>
        {Object.entries(ddddurkColors).map(([key, value]) => (
          <div className="grid gap-y-4" key={key}>
            <h2 className="!mt-0">{`${key
              .charAt(0)
              .toUpperCase()}${key.slice(1)}`}</h2>
            <ColorPalette>
              {value[key as keyof typeof value] ? (
                <Color
                  hex={value[key as keyof typeof value]}
                  label=""
                />
              ) : (
                Object.entries(value).map(
                  ([valueKey, valueValue]) => (
                    <Color
                      hex={valueValue}
                      key={`${key}${valueKey}`}
                      label={valueKey}
                    />
                  )
                )
              )}
            </ColorPalette>
          </div>
        ))}
      </ColorList>
    </>
  );
};

export default Colors;