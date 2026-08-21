export default function EnquirePage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-xs tracking-[0.3em] text-white/60 uppercase">
        Enquiries
      </p>
      <h1 className="mt-4 font-serif text-4xl">
        Begin your <em className="italic">story</em>
      </h1>
      <p className="mt-6 text-lg text-white/70">
        If this feels like the kind of film you&apos;re looking for,
        let&apos;s talk.
      </p>
      <p className="mt-2 text-white/50">2027 &amp; 2028 dates now open</p>

      <div className="mt-14 space-y-2 text-white/80">
        <p>
          Email:{" "}
          <a
            href="mailto:info@houseoftattersall.com"
            className="underline underline-offset-4 hover:text-white"
          >
            info@houseoftattersall.com
          </a>
        </p>
        <p>Location: Denstone, Staffordshire, UK</p>
        <p>
          Follow:{" "}
          <a
            href="https://www.instagram.com/houseoftattersallfilms"
            className="underline underline-offset-4 hover:text-white"
          >
            @houseoftattersallfilms
          </a>
        </p>
      </div>

      <div className="mt-16 rounded-lg border border-dashed border-white/20 p-8 text-sm text-white/40">
        Enquiry form embed goes here — reconnect your existing Wedola contact
        form embed code, or an alternative form provider.
      </div>
    </div>
  );
}
