import "tailwindcss/tailwind.css";

import {
  Footer,
  GridBasic,
  Header,
  Navigation,
  OverlayGradient,
  OverlayGrid
} from "@src/components";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <GridBasic
        as="body"
        className="min-h-screen grid-rows-[auto,auto,1fr,auto] bg-white p-4 text-gray-800 antialiased md:p-6 md:text-lg [&_*]:transition-all"
      >
        <OverlayGradient />
        <OverlayGrid />
        <Header />
        <Navigation />
        {children}
        <Footer />
      </GridBasic>
    </html>
  );
};

export default Layout;
