import { siteConfig, whatsappUrl } from "@/content/site";
import { faqs } from "@/content/faqs";
import { classes } from "@/content/classes";
import { pricing, pricingSpecialDeal } from "@/content/pricing";
import { schedule } from "@/content/schedule";

function parseDuration(duration: string): string {
  const match = duration.match(/(\d+)/);
  if (!match) return "PT60M";
  return `PT${match[1]}M`;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo.svg}`,
    description: siteConfig.description,
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    knowsAbout: [
      "Zumba",
      "HIIT",
      "TRX Training",
      "Fitbounce",
      "Tabata",
      "Circuit Training",
      "Group Fitness",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: "MY",
      availableLanguage: "English",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-MY",
  };
}

function pricingOfferCatalog() {
  const catalogItems = pricing.map((tier) => ({
    "@type": "Offer",
    name: tier.name,
    price: tier.price.replace(/[^\d.]/g, ""),
    priceCurrency: "MYR",
    description: tier.description,
    url: whatsappUrl(siteConfig.whatsappMessages.pricing),
    availability: "https://schema.org/InStock",
  }));

  catalogItems.push({
    "@type": "Offer",
    name: pricingSpecialDeal.title,
    price: pricingSpecialDeal.price.replace(/[^\d.]/g, ""),
    priceCurrency: "MYR",
    description: pricingSpecialDeal.description,
    url: whatsappUrl(siteConfig.whatsappMessages.pricing),
    availability: "https://schema.org/InStock",
  });

  return {
    "@type": "OfferCatalog",
    name: "OurFitness Studio Class Pricing",
    itemListElement: catalogItems,
  };
}

export function healthClubSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    image: `${siteConfig.url}/og-image.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.hours
      .filter((h) => h.open !== "Closed")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.open,
        closes: h.close,
      })),
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    hasMap: siteConfig.mapLink,
    knowsAbout: [
      "Zumba",
      "HIIT",
      "TRX Training",
      "Fitbounce",
      "Tabata",
      "Circuit Training",
      "Group Fitness",
    ],
    hasOfferCatalog: pricingOfferCatalog(),
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function courseListSchema() {
  return classes.map((cls) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: cls.name,
    description: cls.description,
    image: `${siteConfig.url}${cls.image.src}`,
    timeRequired: parseDuration(cls.duration),
    courseMode: "https://schema.org/OfflineAttendance",
    provider: {
      "@type": "HealthClub",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    offers: {
      "@type": "Offer",
      url: whatsappUrl(siteConfig.whatsappMessages.pricing),
      price: "10",
      priceCurrency: "MYR",
      description: "First trial session for new members",
      availability: "https://schema.org/InStock",
    },
  }));
}

function to24Hour(time: string): string {
  const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return "08:30";
  let hour = parseInt(match[1], 10);
  const minute = match[2];
  const period = match[3].toUpperCase();
  if (period === "PM" && hour !== 12) hour += 12;
  if (period === "AM" && hour === 12) hour = 0;
  return `${hour.toString().padStart(2, "0")}:${minute}`;
}

export function classEventListSchema() {
  const grouped = new Map<string, (typeof schedule)[number][]>();

  for (const row of schedule) {
    const key = row.className;
    const existing = grouped.get(key) ?? [];
    existing.push(row);
    grouped.set(key, existing);
  }

  return Array.from(grouped.entries()).map(([className, rows]) => {
    const days = [...new Set(rows.map((row) => row.day))];
    const first = rows[0];
    const lastTime = rows[rows.length - 1].time;
    const endMatch = lastTime.match(/–\s*(.+)$/);
    const startMatch = first.time.match(/^(.+?)\s*–/);

    return {
      "@context": "https://schema.org",
      "@type": "Event",
      name: `${className} Class at ${siteConfig.name}`,
      description: `Weekly ${className} group fitness class in Melaka.`,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventSchedule: {
        "@type": "Schedule",
        repeatFrequency: "P1W",
        byDay: days,
        startTime: startMatch ? to24Hour(startMatch[1]) : "08:30",
        endTime: endMatch ? to24Hour(endMatch[1]) : "09:30",
      },
      location: {
        "@type": "Place",
        name: siteConfig.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          postalCode: siteConfig.address.postalCode,
          addressCountry: "MY",
        },
      },
      organizer: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      offers: {
        "@type": "Offer",
        price: "10",
        priceCurrency: "MYR",
        url: whatsappUrl(siteConfig.whatsappMessages.schedule),
        availability: "https://schema.org/InStock",
      },
    };
  });
}

export function pricingOffersSchema() {
  return pricing.map((tier) => {
    const classCountMatch = tier.period.match(/^(\d+)\s+class/i);
    const offer: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Offer",
      name: tier.name,
      price: tier.price.replace(/[^\d.]/g, ""),
      priceCurrency: "MYR",
      description: tier.description,
      url: whatsappUrl(siteConfig.whatsappMessages.pricing),
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-12-31",
    };

    if (classCountMatch) {
      offer.eligibleQuantity = {
        "@type": "QuantitativeValue",
        value: parseInt(classCountMatch[1], 10),
        unitText: "class",
      };
    }

    return offer;
  });
}
