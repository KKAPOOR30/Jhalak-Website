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
  title: "Jhalak Website",
  description: "UTSC Jhalak Website",
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
        <div id="topbar">
          <a href="https://www.instagram.com/uoftjhalak/" target="_blank" rel="noopener noreferrer">
            <img id="ig_logo" src="instagram_logo.png"></img>
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img id="yt_logo" src="youtube_logo.png"></img>
          </a>
        </div>
      <main>{children}</main>
      </body>
    </html>
  );
}
