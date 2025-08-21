import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Shayan Hezarkhani — Portfolio",
  description: "Motion & Video Designer turning complex ideas into clean, high-impact visuals.",
  openGraph: { title: "Shayan Hezarkhani — Portfolio", description: "Motion & Video Designer turning complex ideas into clean, high-impact visuals.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
