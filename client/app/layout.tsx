import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from './providers'

const font = localFont({ src: '../public/fonts/SF-Pro.ttf' });

export const metadata: Metadata = {
  title: "SARFAD 2024 | POJFM CanSat tým",
  description: "Cansat tým studentů Střední průmyslové školy ve Frýdku-Místku (POJ-FM) pro rok 2024, zvaný SARFAD.",
  keywords: [
    "SARFAD", "Satelit", "CanSat", "CanSat 2022", "CanSat 2023", "CanSat 2024", "Cansat 2025",
    "POJFM", "Frýdek-Místek", "Vesmír", "Tenký klient", "Bigos", "CanSat CZ", "CanSat Česko"
  ],
  authors: [{name: "Daniel Tomis"}, { name: "Prokop Havlík" }, { name: "Jakub Holub" }],
  metadataBase: new URL('https://sarfad.eu'),
  openGraph: {
    title: "SARFAD 2024 | POJFM CanSat tým",
    description: "Cansat tým studentů SPŠ ve Frýdku-Místku pro rok 2024, zvaný SARFAD.",
    url: "https://sarfad.eu/",
    siteName: "SARFAD",
    images: [
      {
        url: "/og-image.png", // should be available in /public
        width: 1200,
        height: 630,
        alt: "SARFAD CanSat tým",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SARFAD 2025 | POJFM CanSat tým",
    description: "Cansat tým studentů SPŠ ve Frýdku-Místku pro rok 2025, zvaný SARFAD.",
    images: ["/twitter-image.png"], // ideally same as OpenGraph or customized
  },
  other: {
    "google-site-verification": "L_rm2Iee41KoIsGrtC23qnMpB-_ETGI3WVZkzx3428w",
  }
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
