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
  title: "Minal | Chapter 40 ❤️",
  description:
    "A beautiful birthday journey celebrating Minal's 40th birthday, memories, love and a story that began in 2004.",
  keywords: [
    "Minal",
    "Chapter 40",
    "Birthday",
    "40th Birthday",
    "Birthday Story",
  ],
  authors: [{ name: "Vishal & Vedika" }],
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