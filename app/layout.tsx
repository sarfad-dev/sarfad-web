import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from './providers'

const font = localFont({ src: '../public/fonts/SF-Pro.ttf' });

export const metadata: Metadata = {
  title: "SARFAD",
  description: "Czech CanSat team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className + " overflow-x-hidden"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
