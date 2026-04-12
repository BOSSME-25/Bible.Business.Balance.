import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bible, Business & Balance | Faith-Centered Entrepreneurship",
  description:
    "Grow in faith, business, and balance. Author, speaker, podcaster, and business consultant helping women of faith build purpose-driven lives and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
