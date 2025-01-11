import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Art of Reading While Listening to Music",
  description: "Reading has long been cherished as a solitary, immersive activity. Whether it’s diving into a gripping novel, studying for exams, or catching up on insightful articles, the act of reading often demands focus and concentration. But what if we add music into the mix? Can melodies complement the written word, or are they just a distraction? Let’s explore the fascinating intersection of reading and music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
