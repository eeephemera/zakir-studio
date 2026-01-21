import type { Metadata } from "next";
import { Orbitron, Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zakir.Studio - AI-Разработка сайтов за 1-3 часа",
  description:
    "Создаём современные лендинги и сайт-визитки с помощью передовых AI-технологий. Готовый сайт за 1-3 часа. Цена от 10000₽.",
  keywords: [
    "создание сайтов",
    "разработка лендингов",
    "AI сайты",
    "быстрая разработка",
    "сайт за час",
  ],
  authors: [{ name: "Zakir.Studio" }],
  openGraph: {
    title: "Zakir.Studio - AI-Разработка сайтов за 1-3 часа",
    description:
      "Создаём современные лендинги и сайт-визитки с помощью AI. Готово за 1-3 часа.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${orbitron.variable} ${spaceMono.variable} ${inter.variable}`}
    >
      <body className="font-inter">{children}</body>
    </html>
  );
}
