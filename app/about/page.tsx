import type { Metadata } from "next";
import { siteConfig, whatsappUrl } from "@/content/site";
import { InstructorCard } from "@/components/sections/InstructorCard";
import { Benefits } from "@/components/sections/Benefits";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/sections/Section";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { aboutMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <Section className="pt-24 pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
            Our Story
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-brand-plum sm:text-5xl">
            About {siteConfig.name} & Instructor {siteConfig.instructor.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-plum/75">
            {siteConfig.name} is a welcoming Zumba studio in Taman Kota Laksamana,
            Melaka. We believe fitness should feel like a celebration — not a
            chore. Our mission is to help every person, regardless of age or
            fitness level, discover the joy of dance fitness in a supportive
            community.
          </p>
        </div>
      </Section>

      <Section variant="warm" className="pt-0">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            { label: "Years Active", value: siteConfig.stats.yearsActive },
            { label: "Classes / Week", value: siteConfig.stats.classesPerWeek },
            { label: "Happy Members", value: siteConfig.stats.happyMembers },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-brand-plum/10 bg-white p-6 text-center shadow-sm"
            >
              <p className="font-display text-3xl font-bold text-brand-coral">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-brand-plum/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <InstructorCard />
      <Benefits />
      <Testimonials />
      <Gallery />

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-brand-plum">
            Join Our Community
          </h2>
          <p className="mt-3 text-brand-plum/75">
            Ready to move, sweat, and smile with us? We would love to welcome you
            to your first class.
          </p>
          <Button
            href={whatsappUrl(siteConfig.whatsappMessages.default)}
            external
            variant="primary"
            className="mt-6"
          >
            Try a Class on WhatsApp
          </Button>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
