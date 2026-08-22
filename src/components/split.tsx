import { Photo } from "@/components/photo";

/**
 * Image and text side by side on desktop, stacked on mobile.
 * `reverse` puts the image on the left instead of the right.
 */
export function Split({
  image,
  alt = "",
  reverse = false,
  children,
  className = "",
}: {
  image: string;
  alt?: string;
  reverse?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-6 py-16 md:py-20 ${className}`}>
      <div
        className={`mx-auto flex max-w-6xl flex-col gap-10 md:items-center md:gap-14 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="md:w-1/2">
          <Photo src={image} alt={alt} />
        </div>
        <div className="md:w-1/2">{children}</div>
      </div>
    </section>
  );
}
