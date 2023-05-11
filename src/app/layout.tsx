import "tailwindcss/tailwind.css";

import {
  Body,
  Footer,
  Header,
  Navigation,
  OverlayGradient,
  OverlayGrid
} from "@components";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <Body>
        <OverlayGradient />
        <OverlayGrid />
        <Header />
        <Navigation />
        {children}
        <Footer />
      </Body>
    </html>
  );
};

export default Layout;
