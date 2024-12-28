import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nasir Ahemad - Full Stack QA Engineer",
  description: "Portfolio of Nasir Ahemad, Full Stack QA Engineer",
  icons: {
    icon: [
      {
        url: "./favicon.ico",
        sizes: "any",
      },
      {
        url: "./icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "./apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "./site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
