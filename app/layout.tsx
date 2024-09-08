import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const font = localFont({ src: '../public/fonts/SF-Pro.ttf' });

export const metadata: Metadata = {
  title: "SARFAD | Home",
  description: "Czech CanSat team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
