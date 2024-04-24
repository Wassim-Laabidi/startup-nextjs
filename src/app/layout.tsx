"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{
      variables: {
        colorBackground: "#141A2Aff",
        colorPrimary: "white",
        colorText: "white",
        colorTextSecondary: "white",
        colorTextOnPrimaryBackground: "white",
        colorShimmer: "white",
        colorInputBackground: "white",
        colorNeutral: "white",

      }
    }}>
      <html suppressHydrationWarning lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />

        <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
          <Providers>
            <Header />

            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}

import { Providers } from "./providers";
