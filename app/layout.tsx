import React from "react";
import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import "./globals.css";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UrbanTrend Emporium",
  description:
    "Discover the Latest Urban Trends in Fashion, Lifestyle, and More at UrbanTrend Emporium. Explore a Curated Collection of High-Quality Products to Elevate Your Style and Surroundings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
