import "@/app/ui/global.css";
import { inter } from "./ui/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next PWA Dashboard App",
  description: "A Next.js application with PWA capabilities",
  manifest: "/manifest.json",
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
