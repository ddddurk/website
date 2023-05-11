import ddddurkColors from "@ddddurk/colors/colors/colors.json";

import Color from "./Color";
import ColorList from "./ColorList";
import ColorPalette from "./ColorPalette";

const Colors = () => {
  return (
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
                label={key}
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
  );
};

export default Colors;
