import type { ReactNode } from "react";

export interface ColorListProps {
  children: ReactNode;
}

const ColorList = ({ children }: ColorListProps) => {
  return (
    <div className="grid gap-y-12 md:gap-y-16">{children}</div>
  );
};

export default ColorList;
