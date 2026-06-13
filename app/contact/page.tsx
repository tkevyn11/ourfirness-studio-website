import type { Metadata } from "next";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/content/site";
import { LocationMap } from "@/components/sections/LocationMap";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/sections/Section";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { contactMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <Section className="pt-24 pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
            Get in Touch
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-brand-plum sm:text-5xl">
            Contact & Location
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-plum/75">
            The fastest way to join a class is to message us on WhatsApp. We
            typically reply within a few hours and will guide you through
            everything you need to get started.
          </p>
        </div>
      </Section>

      <Section variant="warm" className="pt-0">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          <a
            href={whatsappUrl(siteConfig.whatsappMessages.contact)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-2xl border border-brand-plum/10 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366]/20">
              <MessageCircle className="h-7 w-7" aria-hidden />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold text-brand-plum">
              WhatsApp
            </h2>
            <p className="mt-2 text-sm text-brand-plum/70">{siteConfig.phone}</p>
            <p className="mt-3 text-xs font-semibold text-brand-coral">
              Fastest response
            </p>
          </a>

          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-2xl border border-brand-plum/10 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-coral/10 text-brand-coral group-hover:bg-brand-coral/20">
              <Instagram className="h-7 w-7" aria-hidden />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold text-brand-plum">
              Instagram
            </h2>
            <p className="mt-2 text-sm text-brand-plum/70">@ourfitnessstudio</p>
          </a>

          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-2xl border border-brand-plum/10 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal/20">
              <Facebook className="h-7 w-7" aria-hidden />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold text-brand-plum">
              Facebook
            </h2>
            <p className="mt-2 text-sm text-brand-plum/70">Our Fitness Studio</p>
          </a>
        </div>

        <div className="mt-10 text-center">
          <Button
            href={whatsappUrl(siteConfig.whatsappMessages.default)}
            external
            variant="primary"
            className="px-8 py-4 text-base"
          >
            Try a Class on WhatsApp
          </Button>
        </div>
      </Section>

      <LocationMap />
      <FaqSection />
      <CtaBand />
    </>
  );
}
