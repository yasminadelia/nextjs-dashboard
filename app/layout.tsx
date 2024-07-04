import "@/app/ui/global.css";
import { inter } from "./ui/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Next PWA Dashboard App",
    default: "Next PWA Dashboard App",
  },
  description: "A Next.js application with PWA capabilities",
  generator: "Next.js",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  manifest: "/manifest.json",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: { icon: "/logos/logo-96x96.png", apple: "/logos/logo-96x96.png" },
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
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
