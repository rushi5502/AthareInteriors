import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

const font = Poppins({ weight:['200','400','700','900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "onspaceinteriors",
  description: "Design Your Perfect Space with onspace Interiors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <Head>
        <title>onspace interiors- Interior Design Services</title>
         <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="onspace Interiors offers the best interior design solutions to transform your spaces into stunning and functional areas." />
        <meta name="keywords" content="onspace Interiors, interior design, home decor, space planning" />
        
      </Head>
      
      <body className={font.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
