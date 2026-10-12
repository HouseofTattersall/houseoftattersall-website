import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { LocalBusinessSchema, WebSiteSchema } from "@/components/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.houseoftattersall.com"),
  title:
    "Wedding Videographer Derbyshire & Staffordshire | House of Tattersall",
  description:
    "Award-winning cinematic wedding videography across Derbyshire, Staffordshire and Nottinghamshire. Films from £2,100, a maximum of 15 weddings a year.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title:
      "Wedding Videographer Derbyshire & Staffordshire | House of Tattersall",
    description:
      "Award-winning cinematic wedding videography across Derbyshire, Staffordshire and Nottinghamshire. Films from £2,100, a maximum of 15 weddings a year.",
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
    <html lang="en-GB" className="h-full antialiased">
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
