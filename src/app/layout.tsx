import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Navbar/Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "NFC Communication",
  description: "Be connected by one touch",
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      { url: "@/app/opengraph-image.png", width: 800, height: 600 },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen p-4">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
