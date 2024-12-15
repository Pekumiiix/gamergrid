import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./section/header";
import FooterSection from "./section/footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GAMEGRID",
  description: "Become The Ultimate Hero!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <div className="flex flex-col gap-[75px] bg-hero-bg bg-cover bg-center">
          <div className="flex flex-col gap-[75px] backdrop-blur-md bg-white/10">
            <Header />

            {children}
          </div>
        </div>

        <FooterSection />

        <Toaster />
      </body>
    </html>
  );
}
