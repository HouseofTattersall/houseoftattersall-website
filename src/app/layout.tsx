import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { LocalBusinessSchema, WebSiteSchema } from "@/components/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.houseoftattersall.com"),
  title:
    "House of Tattersall | Luxury Cinematic Wedding Videographer, Derbyshire, Staffordshire & Nottinghamshire",
  description:
    "Luxury cinematic wedding videography across Derbyshire, Staffordshire and Nottinghamshire. Award-winning films from £2,100, with a two-videographer package at £2,750.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title:
      "House of Tattersall | Luxury Cinematic Wedding Videographer, Derbyshire, Staffordshire & Nottinghamshire",
    description:
      "Luxury cinematic wedding videography across Derbyshire, Staffordshire and Nottinghamshire. Award-winning films from £2,100, with a two-videographer package at £2,750.",
    url: "/",
    images: ["/images/banner-films.jpg"],
    siteName: "House of Tattersall",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "House of Tattersall | Luxury Cinematic Wedding Videographer",
    description:
      "Luxury cinematic wedding videography across Derbyshire, Staffordshire and Nottinghamshire. Films from £2,100.",
    images: ["/images/banner-films.jpg"],
  },
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
        <WebSiteSchema />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
