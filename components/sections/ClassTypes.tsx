import { classes } from "@/content/classes";
import { ClassCard } from "@/components/sections/ClassCard";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Button } from "@/components/ui/Button";

export function ClassTypes() {
  return (
    <Section id="classes" variant="warm">
      <SectionHeader
        eyebrow="Our Classes"
        title="Zumba Class Types for Every Level"
        description="From high-energy dance fitness to gentle low-impact sessions — find the class that fits you."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls, index) => (
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
