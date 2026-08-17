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

export const metadata = {
  title: "Topdata",
  description: "A Next.js redesign concept for the Danish custom PC vendor Topdata (topdata.dk), focused on modernizing its e-commerce experience and resolving critical UX/UI friction points. Built with Next.js and modern frontend tools, this project transforms Topdata's outdated storefront into an intuitive shopping experience with improved pc configuration flow, visual hierarchy, mobile responsiveness, and optimized core web vitals. Please note that this is an independent design study and frontend implementation developed strictly for educational and portfolio purposes, with no official affiliation to Topdata.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
