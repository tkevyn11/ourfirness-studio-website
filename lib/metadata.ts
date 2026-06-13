import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({ title, description, path }: PageMeta): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_MY",
      type: "website",
      images: [{ url: `${siteConfig.url}/og-image.svg`, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export const homeMetadata = createMetadata({
  title: `Zumba Classes in Melaka | ${siteConfig.name}`,
  description:
    "Fun, beginner-friendly Zumba dance-fitness classes in Taman Kota Laksamana, Melaka. No experience needed. Try a class - message us on WhatsApp today.",
  path: "/",
});

export const classesMetadata = createMetadata({
  title: `Zumba Class Types for Beginners | ${siteConfig.name}`,
  description:
    "Explore Zumba Fitness, Zumba Gold, and Zumba Toning classes in Melaka. Beginner-friendly dance workouts with instructor Pearly Kong.",
  path: "/classes",
});

export const scheduleMetadata = createMetadata({
  title: `Zumba Class Schedule & Pricing in Melaka | ${siteConfig.name}`,
  description:
    "View Zumba class times and pricing at Our Fitness Studio in Taman Kota Laksamana, Melaka. Drop-in, monthly, and bundle options available.",
  path: "/schedule",
});

export const aboutMetadata = createMetadata({
  title: `About ${siteConfig.name} & Instructor ${siteConfig.instructor.name}`,
  description:
    `Meet ${siteConfig.instructor.name} and learn about Our Fitness Studio — a welcoming Zumba community in Melaka for all fitness levels.`,
  path: "/about",
});

export const contactMetadata = createMetadata({
  title: `Contact & Location | Zumba Studio in Melaka | ${siteConfig.name}`,
  description:
    "Find Our Fitness Studio at Jalan KLJ 6, Taman Kota Laksamana, Melaka. Call 014-6067687 or message us on WhatsApp to join a class.",
  path: "/contact",
});
