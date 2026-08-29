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
  title: "Kavya | Birthday Celebration ❤️",
  description:
    "A beautiful birthday celebration for Kavya, surrounded by love from Siddhartha, daughter Neha and son Parth.",
  keywords: [
    "Siddhartha",
    "Kavya",
    "Neha",
    "Parth",
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