import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/TopNavBar";
import MouseFollowerBlob from "@/components/MouseFollowerBlob";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Banner } from "@/components/Banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACM & xSTF CTF",
  description: "Capture the Flag Competition by ACM and xSTF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="CTFACM" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Banner defaultVisible={true} />
        <AnimatedBackground />
        <MouseFollowerBlob />
        <TopNavBar />

        {children}
      </body>
    </html>
  );
}
