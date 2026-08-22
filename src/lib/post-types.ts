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
};
