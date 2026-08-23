import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { LocalBusinessSchema } from "@/components/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.houseoftattersall.com"),
  title:
    "House of Tattersall | Luxury Cinematic Wedding Videographer, Derbyshire, Staffordshire & Nottinghamshire",
  description:
    "Luxury cinematic wedding videography across Derbyshire, Staffordshire and Nottinghamshire. Award-winning films from £2,000, with most couples investing £2,300 to £2,700.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-[var(--paper)] text-[var(--ink-muted)]">
        <LocalBusinessSchema />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
