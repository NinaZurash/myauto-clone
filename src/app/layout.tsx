import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import React from "react";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { ProductsProvider } from "@/providers/ProductsProvider";

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
              <div
                className={cn(
                  "flex max-w-screen-lg  flex-col w-full",
                  fontSans.variable
                )}
              >
                {children}
              </div>
            </main>
          </ProductsProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
