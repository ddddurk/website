import type { ReactNode } from "react";

import PolymorphGridComplex from "./PolymorphGridComplex";

export interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <PolymorphGridComplex
      as="main"
      className="!col-start-0 !col-span-3 [&_h1]:text-gray-900 [&_h1]:text-3xl [&_h1]:sm:text-4xl [&_h1]:md:text-5xl [&_h1]:font-bold [&_pre]:bg-gray-800 [&_pre]:text-sm [&_pre]:md:text-base [&_pre]:p-4 [&_pre]:md:px-6 [&_pre]:rounded-xl [&_pre]:overflow-x-scroll"
    >
      {children}
    </PolymorphGridComplex>
  );
};

export default Main;
