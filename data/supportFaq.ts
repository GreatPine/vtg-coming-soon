import faqData from "./supportFaq.json";

export type SupportFaqEntry = {
  slug: string;
  category: string;
  title: string;
  content: string;
  language_code: "sr" | "en" | "de" | "it" | "fr" | "es" | "ru" | "hi" | "zh" | "ar";
  keywords: string[];
  sort_order: number;
};

export const supportFaq = faqData as SupportFaqEntry[];
