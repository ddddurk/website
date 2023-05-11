import "tailwindcss/tailwind.css";

import {
  Body,
  Footer,
  Header,
  Main,
  Navigation,
  OverlayGradient,
  OverlayGrid
} from "@components";
import { metadata as libMetadata } from "@lib";
import type { ReactNode } from "react";

export const metadata = libMetadata;

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
        <Main>{children}</Main>
        <Footer />
      </Body>
    </html>
  );
};

export default Layout;
