import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import  Navbar  from "@/components/global/navbar";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "LiveDocs",
  description: " Created By Megha Kaushal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-white text-black font-sans antialiased",
          fontSans.variable
        )}
      >
      <Navbar />
      
      {children}
      </body>
    </html>
  );
}
