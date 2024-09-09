import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const font = Poppins({ weight:['200','400','700','900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AthareInteriors",
  description: "Design Your Perfect Space with Athare Interiors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>AthareInteriors</title>
      </head>
      <body className={font.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
