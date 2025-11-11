import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Emami - Senior Full-Stack Engineer & AI Product Architect",
  description: "Personal website of Ali Emami - Senior Full-Stack Engineer, AI Product Architect, and Founder of EDGECASE LLC. 20+ years of experience building high-performance software.",
  keywords: ["Ali Emami", "Full-Stack Engineer", "AI", "Software Engineer", "EDGECASE", "Amazon", "American Express"],
  authors: [{ name: "Ali Emami" }],
  openGraph: {
    title: "Ali Emami - Senior Full-Stack Engineer & AI Product Architect",
    description: "20+ years of experience building high-performance software across mobile, web, cloud infrastructure, and AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
