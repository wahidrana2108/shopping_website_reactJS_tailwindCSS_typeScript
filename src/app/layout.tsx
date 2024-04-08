import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewProducts from "@/components/NewProducts";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <HeaderTop />
        <HeaderMain />
        <Navbar />
        <Hero />
        <NewProducts />
        {children}
        <Testimonials />
        <Footer />

        </body>
    </html>
  );
}
