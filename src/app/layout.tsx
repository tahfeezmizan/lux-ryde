/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ReduxProvider from "@/redux/provider/ReduxProvider";
import { CookieConsent } from "@/components/PolicyPages/Cookie-consent";
import TawkToChat from "@/components/TawkToChat";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Adjust weights as needed
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "LuxRide - Premium Urban Transport & Rewards Platform",
  description:
    "Drive with LuxRide. Earn more with every ride, unlock loyalty perks, and grow your income through a powerful multi-level referral system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Toaster position="bottom-right" richColors />
        <ReduxProvider>
          {children}
          <CookieConsent />
        </ReduxProvider>
        <TawkToChat />
      </body>
    </html>
  );
}
