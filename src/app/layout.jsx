import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Siddhartha & Kavya | Chapter 42 ❤️",
  description:
    "A beautiful birthday celebration for Neha, surrounded by love, family and memories from Siddhartha and Kavya.",
  keywords: [
    "Siddhartha",
    "Kavya",
    "Neha",
    "Chapter 42",
    "Birthday",
    "Birthday Story",
  ],
  authors: [{ name: "Siddhartha & Kavya" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-[#fff9fc] text-[#24151d]">
        {children}
      </body>
    </html>
  );
}