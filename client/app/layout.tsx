import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from './providers';

const font = localFont({
  src: '../public/fonts/SF-Pro.woff2',
  display: 'optional',
});

export const metadata: Metadata = {
  title: "SARFAD 2025",
  description: "Cansat tým studentů Střední průmyslové školy ve Frýdku-Místku (POJ-FM) pro rok 2025, zvaný SARFAD.",
  keywords: [
    "SARFAD", "Satelit", "CanSat", "CanSat 2022", "CanSat 2023", "CanSat 2024", "CanSat 2025",
    "POJFM", "Frýdek-Místek", "Vesmír", "Tenký klient", "Bigos", "CanSat CZ", "CanSat Česko"
  ],
  authors: [{ name: "Daniel Tomis" }, { name: "Prokop Havlík" }, { name: "Jakub Holub" }],
  metadataBase: new URL('https://sarfad.eu'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SARFAD 2025",
    description: "Cansat tým studentů SPŠ ve Frýdku-Místku pro rok 2025, zvaný SARFAD.",
    url: "https://sarfad.eu/",
    siteName: "SARFAD",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SARFAD 2025",
    description: "Cansat tým studentů SPŠ ve Frýdku-Místku pro rok 2025, zvaný SARFAD.",
  },

  other: {
    "google-site-verification": "L_rm2Iee41KoIsGrtC23qnMpB-_ETGI3WVZkzx3428w",
    "publisher": "Střední průmyslová škola Frýdek-Místek",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <link rel="canonical" href="https://sarfad.eu/" />
        <meta name="robots" content="index, follow" />
        <meta name="publisher" content="Střední průmyslová škola Frýdek-Místek" />

        <link
          rel="preload"
          href="/fonts/SF-Pro.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={font.className + " overflow-x-hidden"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
