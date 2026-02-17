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
  metadataBase: new URL('https://zakir.tech'),
  title: {
    default: "Zakir.Studio - AI-Разработка сайтов за 1-3 часа | Next.js, React",
    template: "%s | Zakir.Studio"
  },
  description:
    "Создаём современные лендинги и сайт-визитки с помощью передовых AI-технологий. Готовый сайт за 1-3 часа. Next.js, React, TypeScript. Цена от 10000₽.",
  keywords: [
    "создание сайтов",
    "разработка лендингов",
    "AI сайты",
    "быстрая разработка",
    "сайт за час",
    "Next.js разработка",
    "React сайты",
    "zakir studio",
    "zakir.tech",
    "сайт под ключ",
    "лендинг под ключ"
  ],
  authors: [{ name: "Zakir.Studio", url: "https://zakir.tech" }],
  creator: "Zakir.Studio",
  publisher: "Zakir.Studio",
  openGraph: {
    title: "Zakir.Studio - AI-Разработка сайтов за 1-3 часа",
    description:
      "Создаём современные лендинги и сайт-визитки с помощью AI. Готово за 1-3 часа.",
    type: "website",
    locale: "ru_RU",
    url: "https://zakir.tech",
    siteName: "Zakir.Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zakir.Studio - AI-Разработка сайтов",
    description: "Создаём современные сайты за 1-3 часа с помощью AI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: "technology",
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
