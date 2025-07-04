import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leave Management System",
  description:
    "A simple leave management system built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-gradient-to-br from-purple-900 to-indigo-800"}>
        {children}
      </body>
    </html>
  );
}
