import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPost, bannerFor } from "@/lib/posts";
import { PageBanner } from "@/components/page-banner";
import { Prose } from "@/components/prose";
import { VideoEmbed } from "@/components/video-embed";
import { Faq } from "@/components/faq";
import { FaqSchema } from "@/components/schema";
import { CtaBand } from "@/components/cta";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | House of Tattersall`,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageBanner
        title={post.title}
        eyebrow={post.category}
        image={bannerFor(post)}
      />

      <article className="mx-auto max-w-2xl px-6 py-14">
        <p className="text-xs tracking-[0.2em] text-[var(--gold)] uppercase">
          {post.date}
        </p>

        {post.videoId ? (
          <div className="mt-8">
            <VideoEmbed id={post.videoId} title={post.title} />
          </div>
        ) : null}

        <div className="mt-6">
          <Prose body={post.body} />
        </div>

        {post.faqs?.length ? (
          <div className="mt-16 border-t border-[var(--rule)] pt-10">
            <h2 className="font-serif text-2xl text-[var(--khaki)]">
              Frequently asked questions
            </h2>
            <div className="mt-6">
              <Faq items={post.faqs} />
            </div>
            <FaqSchema items={post.faqs} />
          </div>
        ) : null}

        <div className="mt-14 border-t border-[var(--rule)] pt-8">
          <Link
            href="/blog/"
            className="text-sm tracking-wide text-[var(--khaki)] underline underline-offset-4"
          >
            Back to all posts
          </Link>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
