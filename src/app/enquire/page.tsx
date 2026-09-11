import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Photo } from "@/components/photo";
import { PageBanner } from "@/components/page-banner";
import { CtaBand } from "@/components/cta";
import { BreadcrumbSchema } from "@/components/schema";

export const metadata: Metadata = pageMeta({
  title:
    "Enquire | Check Your Date, House of Tattersall Wedding Films",
  description:
    "Check availability for your wedding date and request the full investment guide. Luxury cinematic wedding films from £2,100 across Derbyshire, Staffordshire and Nottinghamshire.",
  path: "/enquire/",
  image: "/images/banner-enquire.jpg",
});


export default function EnquirePage() {
  return (
    <>
      <BreadcrumbSchema trail={[{ name: "Enquire", path: "/enquire/" }]} />
      <PageBanner
        title="Enquire"
        eyebrow="Enquiries"
        image="/images/banner-enquire.jpg"
      />

      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="mt-6 text-lg text-[var(--ink-muted)]">
        If this feels like the kind of film you&apos;re looking for,
        let&apos;s talk.
      </p>
      <p className="mt-2 text-[var(--ink-faint)]">2027 &amp; 2028 dates now open</p>

      <div className="mt-14 flex flex-col gap-10 text-left md:flex-row md:items-center md:gap-14">
        <div className="md:w-1/2">
          <Photo src="/images/enquire-1.jpg" alt="" />
        </div>
        <div className="md:w-1/2">
      <div className="mt-14 space-y-2 text-[var(--ink-muted)]">
        <p>
          Email:{" "}
          <a
            href="mailto:info@houseoftattersall.com"
            className="underline underline-offset-4 hover:text-[var(--ink)]"
          >
            info@houseoftattersall.com
          </a>
        </p>
        <p>Location: Denstone, Staffordshire, UK</p>
        <p>
          Follow:{" "}
          <a
            href="https://www.instagram.com/houseoftattersallfilms"
            className="underline underline-offset-4 hover:text-[var(--ink)]"
          >
            @houseoftattersallfilms
          </a>
        </p>
      </div>
        </div>
      </div>

      <div className="mt-16 text-left">
        <iframe
          src="https://wedola.co/dynamic_contact?token=1756560179650x344851371770121800"
          title="Enquiry form"
          className="w-full border-none"
          style={{ height: "1087px" }}
          scrolling="yes"
        />
      </div>
      </div>

      <CtaBand />
    </>
  );
}
