import "tailwindcss/tailwind.css";

import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
