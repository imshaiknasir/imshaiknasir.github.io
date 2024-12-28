import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nasir Ahemad - Full Stack QA Engineer",
  description: "Portfolio of Nasir Ahemad, Full Stack QA Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="./globals.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
