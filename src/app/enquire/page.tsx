import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Photo } from "@/components/photo";
import { PageBanner } from "@/components/page-banner";
import { EnquiryForm } from "@/components/enquiry-form";
import { CtaBand } from "@/components/cta";
import { BreadcrumbSchema } from "@/components/schema";
import { Journey } from "@/components/journey";
import { AvailabilityNote } from "@/components/availability-note";

export const metadata: Metadata = pageMeta({
  title:
    "Enquire | Check Your Date, House of Tattersall Wedding Films",
  description:
    "Check availability for your date. Cinematic wedding films from £2,100 across Derbyshire, Staffordshire and Nottinghamshire.",
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

      <div className="mx-auto max-w-2xl px-6 pt-12 pb-24">
        <div className="text-center">
          <p className="text-lg text-[var(--ink-muted)]">
            If this feels like the kind of film you&apos;re looking for,
            let&apos;s talk.
          </p>
        </div>

        <AvailabilityNote className="mt-10" />

        {/* The form comes first: this is the one page where someone has
            already decided to get in touch. The journey sits just above it,
            because "what happens if I send this" is the thing that stops
            people pressing the button. */}
        <div className="text-left">
          <Journey compact />
        </div>

        <EnquiryForm title="Enquiry form" className="mt-10" />

        <div className="mt-16 border-t border-[var(--rule)] pt-12">
          <div className="flex flex-col gap-10 text-left md:flex-row md:items-center md:gap-14">
            <div className="md:w-1/2">
              <Photo
                src="/images/enquire-1.jpg"
                alt="A bride looking out from a wedding car, filmed by House of Tattersall"
              />
            </div>
            <div className="space-y-2 text-[var(--ink-muted)] md:w-1/2">
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
      </div>

      <CtaBand />
    </>
  );
}
