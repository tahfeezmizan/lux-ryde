import type { Metadata } from "next";
import "./globals.css";

import { Inter, Montserrat } from "next/font/google";
import { Outfit } from "next/font/google"; // Import Outfit font
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "LuxRide - Premium Urban Transport & Rewards Platform",
  description:
    "",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-montserrat",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-outfit",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${outfit.variable} ${inter.variable}`}
      >
       <div>
          {children}
       </div>
        <Toaster />
      </body>
    </html>
  );
}
