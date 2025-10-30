import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paula.vercel.app"),
  title: "Pau.la — IA para la PAU",
  description: "La IA que te dice exactamente qué estudiar y qué descartar para maximizar tu nota en la PAU.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Pau.la — IA para la PAU",
    description: "Estudia 70% menos y sube tu nota en la PAU con inteligencia artificial.",
    url: "https://paula.vercel.app",
    siteName: "Pau.la",
    images: [
      { url: "/og.png", width: 1200, height: 630 }
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pau.la — IA para la PAU",
    description: "La IA que revoluciona la preparación de la selectividad.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
