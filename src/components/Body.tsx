import type { ReactNode } from "react";

import PolymorphGridBasic from "./PolymorphGridBasic";

export interface BodyProps {
  children: ReactNode;
}

const Body = ({ children }: BodyProps) => {
  return (
    <PolymorphGridBasic
      as="body"
      className="min-h-screen grid-rows-[auto,auto,1fr,auto] bg-white p-4 text-gray-700 antialiased md:p-6 md:text-lg [&_*]:transition-all [&_h1]:text-gray-900 [&_h1]:text-3xl [&_h1]:sm:text-4xl [&_h1]:md:text-5xl [&_h1]:font-bold [&_h2]:text-gray-900 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:md:text-2xl [&_h2]:mt-16"
    >
      {children}
    </PolymorphGridBasic>
  );
};

export default Body;
