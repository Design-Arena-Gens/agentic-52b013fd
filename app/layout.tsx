import "./globals.css";

import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "GMIndia | Enterprise IT Solutions & Digital Transformation",
  description:
    "GMIndia delivers enterprise IT solutions, cloud modernization, AI-driven transformation, and managed services tailored for global businesses.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "GMIndia | Enterprise IT Solutions & Digital Transformation",
    description:
      "GMIndia delivers enterprise IT solutions, cloud modernization, AI-driven services, cybersecurity, and managed operations for global enterprises.",
    url: "https://gmindia.com",
    siteName: "GMIndia",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
