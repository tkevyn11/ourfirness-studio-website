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
  title: `Zumba, TRX & HIIT Classes in Melaka | ${siteConfig.name}`,
  description:
    "Fun group fitness in Taman Kota Laksamana, Melaka. Zumba, Tabata, TRX, Fitbounce, Strong Nation, and Circuit Training. Try your first class for RM10.",
  path: "/",
});

export const classesMetadata = createMetadata({
  title: `Zumba, TRX, HIIT & Fitbounce Classes in Melaka | ${siteConfig.name}`,
  description:
    "Explore 6 class types at OurFitness Studio in Melaka: Zumba, Tabata, TRX, Fitbounce, Strong Nation, and Circuit Training. Beginner-friendly sessions with instructor Pearly Kong.",
  path: "/classes",
});

export const scheduleMetadata = createMetadata({
  title: `Class Schedule & Pricing in Melaka | RM10 First Session | ${siteConfig.name}`,
  description:
    "View weekly class times and pricing at OurFitness Studio, Melaka. Morning and evening sessions Monday to Friday. First trial RM10, unlimited monthly RM160.",
  path: "/schedule",
});

export const aboutMetadata = createMetadata({
  title: `About ${siteConfig.name} & Instructor ${siteConfig.instructor.name}`,
  description:
    `Meet ${siteConfig.instructor.name} and learn about OurFitness Studio, a welcoming group fitness community in Taman Kota Laksamana, Melaka for all fitness levels.`,
  path: "/about",
});

export const contactMetadata = createMetadata({
  title: `Contact & Location | Fitness Studio in Melaka | ${siteConfig.name}`,
  description:
    "Find OurFitness Studio at Jalan KLJ 6, Taman Kota Laksamana, Melaka. Call 014-6067687 or message us on WhatsApp to join a class.",
  path: "/contact",
});
