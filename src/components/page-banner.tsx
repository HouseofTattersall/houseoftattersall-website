export function PageBanner({
  title,
  eyebrow,
  image,
}: {
  title: string;
  eyebrow?: string;
  image?: string;
}) {
  return (
    <section className="relative flex h-56 items-center justify-center overflow-hidden md:h-64">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--khaki)] to-[var(--khaki-deep)]" />
      )}

      {/* darkening overlay so white text stays legible */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative px-6 text-center">
        {eyebrow ? (
          <p className="text-xs tracking-[0.3em] text-white/80 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 font-serif text-3xl text-white md:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
