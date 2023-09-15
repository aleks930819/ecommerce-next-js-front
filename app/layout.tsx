import React, { Suspense } from "react";
import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import "./globals.css";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import ToastProvider from "@/providers/toast-provider";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import ContactUsButton from "@/components/contact-us/contact-us-button";
import CheckoutMenu from "@/components/checkout-menu/checkout-menu";
import QuickView from "@/components/quick-view/quick-view";

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
      <head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={font.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <ToastProvider />
          <ScrollToTopButton />
          <Navbar />
          <main>{children}</main>
          {/* <ContactUsButton /> */}
          <CheckoutMenu />
          <QuickView />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
