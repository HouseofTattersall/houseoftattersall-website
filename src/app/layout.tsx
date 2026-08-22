import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { LocalBusinessSchema } from "@/components/schema";

export const metadata: Metadata = {
  title: "House of Tattersall | Cinematic Wedding Videographer",
  description:
    "Cinematic award-winning wedding videography across the UK, serving Derbyshire, Staffordshire & Nottinghamshire.",
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
