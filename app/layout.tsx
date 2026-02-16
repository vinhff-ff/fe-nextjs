import type { Metadata } from "next";
import React from "react";
import './Style/index.scss';
export const metadata: Metadata = {
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
