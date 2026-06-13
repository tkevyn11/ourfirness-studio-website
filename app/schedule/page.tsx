import type { Metadata } from "next";
import { ScheduleTable } from "@/components/sections/ScheduleTable";
import { PricingCards } from "@/components/sections/PricingCards";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/sections/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { scheduleMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = scheduleMetadata;

export default function SchedulePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Schedule & Pricing", path: "/schedule" },
          ]),
          faqPageSchema(),
        ]}
      />

      <Section className="pt-24 pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
            Plan Your Visit
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-brand-plum sm:text-5xl">
            Zumba Class Schedule & Pricing in Melaka
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-plum/75">
            Find a class time that works for you and explore flexible pricing
            options. Message us on WhatsApp to confirm availability and join your
            first session.
          </p>
        </div>
      </Section>

      <ScheduleTable />
      <PricingCards />
      <FaqSection />
      <CtaBand />
    </>
  );
}
