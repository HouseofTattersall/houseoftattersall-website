import { PageBanner } from "@/components/page-banner";
import { CtaBand } from "@/components/cta";
import { ArticleSchema, BreadcrumbSchema } from "@/components/schema";

export function Article({
  title,
  eyebrow = "Guides",
  banner,
  intro,
  slug,
  description,
  datePublished,
  children,
}: {
  title: string;
  eyebrow?: string;
  banner?: string;
  intro?: string;
  /** Route segment under /blog/, so the guide can carry Article and Breadcrumb markup */
  slug?: string;
  description?: string;
  datePublished?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {slug ? (
        <>
          <BreadcrumbSchema
            trail={[
              { name: "Film Reviews", path: "/blog/" },
              { name: title, path: `/blog/${slug}/` },
            ]}
          />
          <ArticleSchema
            title={title}
            description={description ?? intro ?? title}
            slug={slug}
            image={banner ?? "/images/banner-blog.jpg"}
            datePublished={datePublished}
          />
        </>
      ) : null}

      <PageBanner title={title} eyebrow={eyebrow} image={banner} />

      <article className="mx-auto max-w-2xl px-6 py-16">
        {intro ? (
          <p className="text-lg leading-relaxed text-[var(--ink-muted)]">
            {intro}
          </p>
        ) : null}
        <div className="prose-hot mt-8">{children}</div>
      </article>

      <CtaBand />
    </>
  );
}

/** Section heading written as the question a couple would actually ask. */
export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 font-serif text-2xl text-[var(--khaki)]">{children}</h2>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">{children}</p>
  );
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--ink-muted)]">
      {children}
    </ul>
  );
}

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 border-l-2 border-[var(--gold)] pl-5 text-lg leading-relaxed text-[var(--ink)]">
      {children}
    </p>
  );
}
