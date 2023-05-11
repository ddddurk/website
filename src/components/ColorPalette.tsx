import type { ReactNode } from "react";

export interface ColorPaletteProps {
  children: ReactNode;
}

const ColorPalette = ({ children }: ColorPaletteProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {children}
    </div>
  );
};

export default ColorPalette;
