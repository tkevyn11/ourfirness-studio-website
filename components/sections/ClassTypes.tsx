import { classes } from "@/content/classes";
import { ClassCard } from "@/components/sections/ClassCard";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Button } from "@/components/ui/Button";

export function ClassTypes() {
  return (
    <Section id="classes" variant="warm">
      <SectionHeader
        eyebrow="Our Classes"
        title="Six Ways to Move at OurFitness Studio"
        description="From dance cardio and rebounder sessions to TRX strength and HIIT. Find the class that fits your goals."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {classes.slice(0, 3).map((cls, index) => (
          <ClassCard key={cls.id} cls={cls} index={index} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/classes" variant="outline">
          Explore All Classes
        </Button>
      </div>
    </Section>
  );
}
