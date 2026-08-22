import { Photo } from "@/components/photo";
import { PageBanner } from "@/components/page-banner";
import { CtaBand } from "@/components/cta";

export default function EnquirePage() {
  return (
    <>
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

      <div className="mt-14">
        <Photo src="/images/enquire-1.jpg" alt="" />
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
