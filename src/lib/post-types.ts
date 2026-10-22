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
  video?: {
    id: string;
    name: string;
    description: string;
    /** Defaults to vidflow; set "youtube" for an older film */
    source?: "vidflow" | "youtube";
  };
  /** Couples quoted in the body, by name, so the quotes carry Review markup */
  reviewNames?: string[];
  /**
   * Search-result description, when the visible excerpt is longer than the
   * ~160 characters Google shows. The excerpt stays as written for readers.
   */
  seoDescription?: string;
  /**
   * Search-result title, when the headline on the page and the title you want
   * in Google are different. Falls back to `title`.
   */
  seoTitle?: string;
};
