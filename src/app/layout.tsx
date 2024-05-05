import type { Metadata } from "next";

import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import React from "react";

import Header from "@/components/Header";
import { ProductsProvider } from "@/providers/ProductsProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ProductsProvider>
            <Header />
            <main className="flex w-full justify-center">
              <div className={cn("flex w-full  max-w-screen-lg flex-col", fontSans.variable)}>
                {children}
              </div>
            </main>
          </ProductsProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
