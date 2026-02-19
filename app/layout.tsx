import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catalina Meneses Carmona - Software Engineer",
  description: "Software Engineer with 9+ years of experience in EdTech, FinTech, HealthTech, and IoT. Specialized in React, TypeScript, Next.js, and frontend architecture.",
  keywords: ["Software Engineer", "Frontend Developer", "React", "TypeScript", "Next.js", "Web Development"],
  authors: [{ name: "Catalina Meneses Carmona" }],
  openGraph: {
    title: "Catalina Meneses Carmona - Software Engineer",
    description: "Software Engineer with 9+ years of experience building high-quality products.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
