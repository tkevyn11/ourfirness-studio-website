import type { Metadata } from "next";
import { classes } from "@/content/classes";
import { ClassCard } from "@/components/sections/ClassCard";
import { WhatToBring } from "@/components/sections/WhatToBring";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section, SectionHeader } from "@/components/sections/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { classesMetadata } from "@/lib/metadata";
import { breadcrumbSchema, courseListSchema } from "@/lib/schema";

export const metadata: Metadata = classesMetadata;

export default function ClassesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Classes", path: "/classes" },
          ]),
          ...courseListSchema(),
        ]}
      />

      <Section className="pt-24 pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
            Dance Fitness
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-brand-plum sm:text-5xl">
            Zumba Class Types for Beginners
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-plum/75">
            Put on your party shoes and get your sweat on. Our Zumba classes blend
            Latin rhythms with chart-topping hits for a fun workout that tones your
            body and lifts your mood — no dance experience required.
          </p>
        </div>
      </Section>

      <Section variant="warm" className="pt-0">
        <SectionHeader
          title="Classes Just for You"
          description="Choose the class that matches your fitness level and goals."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls, index) => (
            <ClassCard key={cls.id} cls={cls} index={index} />
          ))}
        </div>
      </Section>

      <WhatToBring />
      <CtaBand />
    </>
  );
}
