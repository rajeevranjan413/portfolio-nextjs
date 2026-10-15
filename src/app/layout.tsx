import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Rajeev Ranjan | Full Stack Software Engineer",
  description:
    "Rajeev Ranjan, Full Stack Software Engineer in Jaipur with 3+ years building e-commerce platforms, Shopify apps and SaaS products with Node.js, Next.js and AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <div className="aurora" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div className="grid-overlay" aria-hidden />
        {children}
      </body>
    </html>
  );
}
