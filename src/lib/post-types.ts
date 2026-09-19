import type { FaqItem } from "@/components/faq";

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  /** vidflow.co video id, if the post carries a film */
  videoId?: string;
  excerpt: string;
  /** Body copy in the light markdown subset handled by <Prose /> */
  body: string;
  faqs?: FaqItem[];
  banner?: string;
  /** A film embedded inside the body, for VideoObject markup */
  video?: { id: string; name: string; description: string };
  /** Couples quoted in the body, by name, so the quotes carry Review markup */
  reviewNames?: string[];
};
