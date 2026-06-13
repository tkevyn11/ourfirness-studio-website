import { Hero } from "@/components/sections/Hero";
import { AboutSummary } from "@/components/sections/AboutSummary";
import { BeginnerCallout } from "@/components/sections/BeginnerCallout";
import { Benefits } from "@/components/sections/Benefits";
import { ClassTypes } from "@/components/sections/ClassTypes";
import { WhatToBring } from "@/components/sections/WhatToBring";
import { InstructorCard } from "@/components/sections/InstructorCard";
import { ScheduleTable } from "@/components/sections/ScheduleTable";
import { PricingCards } from "@/components/sections/PricingCards";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { FaqSection } from "@/components/sections/FaqSection";
import { LocationMap } from "@/components/sections/LocationMap";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageSchema()} />
      <Hero />
      <AboutSummary />
      <BeginnerCallout />
      <Benefits />
      <ClassTypes />
      <WhatToBring />
      <InstructorCard />
      <ScheduleTable />
      <PricingCards />
      <Testimonials />
      <Gallery />
      <FaqSection />
      <LocationMap />
      <CtaBand />
    </>
  );
}
