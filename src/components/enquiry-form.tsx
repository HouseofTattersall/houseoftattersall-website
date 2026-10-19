/**
 * The Wedola enquiry form.
 *
 * Kept in one place because the embed height has changed twice now, and having
 * it in two files meant one of them was always wrong. If Andy changes the form
 * in Wedola, update HEIGHT here and nowhere else.
 */
const SRC =
  "https://wedola.co/dynamic_contact?token=1756560179650x344851371770121800";

/** Matches the embed code Wedola gives Andy. Updated 19 October 2026. */
const HEIGHT = 888;

export function EnquiryForm({
  title = "Enquiry form",
  className = "",
}: {
  /** Used as the iframe's accessible name, so make it describe the task */
  title?: string;
  className?: string;
}) {
  return (
    <div className={`text-left ${className}`}>
      <iframe
        src={SRC}
        title={title}
        className="w-full border-none"
        style={{ height: `${HEIGHT}px`, overflow: "auto" }}
        scrolling="yes"
      />
    </div>
  );
}
