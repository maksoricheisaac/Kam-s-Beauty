import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SB",
  description: "SB, votre salon de beauté conplet : coiffure, onglerie, make-up et vente de produits cosmétiques. Situé au Congo Brazzaville",
  keywords: "SB, salon de coiffure, ong:lerie, make-up, vente de produits cosmétiques, Brazzaville, Congo",
  applicationName: "SB",
  authors: {name: "Makso Riche Isaac", url: "https://my-portfolio-ruby-theta-72.vercel.app/"},
  openGraph: {
    type: "website",
    countryName: "Congo",
    description: "SB, votre salon de beauté conplet : coiffure, onglerie, make-up et vente de produits cosmétiques. Situé au Congo Brazzaville",
    title: "SB",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
