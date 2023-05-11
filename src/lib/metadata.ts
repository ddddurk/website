import type { Metadata } from "next";

const description = "Data Enthusiast, Software Engineer";
const title = "Durk (ddddurk)";
const url = "https://ddddurk.com";

export const metadata: Metadata = {
  description,
  title: {
    default: title,
    template: "%s | Durk (ddddurk)"
  },
  openGraph: {
    description,
    images: [
      {
        height: 1080,
        url: `${url}/og.png`,
        width: 1920
      }
    ],
    locale: "en-US",
    siteName: title,
    title,
    type: "website",
    url
  },
  robots: {
    index: true,
    follow: true
  },
  twitter: {
    card: "summary_large_image",
    title
  },
  icons: {
    shortcut: "/favicon.ico"
  }
};
