import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Provider } from "./providers/Provider";
import { SITE_NAME } from "@/shared/constants/seo.constants";
import "./globals.css";


const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: '400'
});

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "A web application for managing your daily tasks and activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monoFont.variable} antialiased`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
