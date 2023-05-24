import type { ReactNode } from "react";

import PolymorphGridBasic from "./PolymorphGridBasic";

export interface BodyProps {
  children: ReactNode;
}

const Body = ({ children }: BodyProps) => {
  return (
    <PolymorphGridBasic
      as="body"
      className="min-h-screen grid-rows-[auto,auto,1fr,auto] bg-white p-4 text-gray-700 antialiased md:p-6 md:text-lg [&_*]:transition-all leading-relaxed"
    >
      {children}
    </PolymorphGridBasic>
  );
};

export default Body;
