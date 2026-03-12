import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Hookwell Engineers | Industrial Lifting Solutions",
  description: "Hookwell Engineers - Premium industrial lifting equipment made in India. Chain pulley blocks, hoists, trolleys and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload the first sequence frame so it shows instantly */}
        <link rel="preload" href="/sequence/frame_000_delay-0.041s.png" as="image" />
      </head>
      <body className="antialiased font-sans bg-[#121212] text-white">
        {children}
      </body>
    </html>
  );
}
