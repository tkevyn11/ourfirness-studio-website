import { siteConfig } from "@/content/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Button } from "@/components/ui/Button";

export function InstructorCard() {
  return (
    <Section id="instructor" variant="warm">
      <SectionHeader
        eyebrow="Meet Your Instructor"
        title={`Say Hello to ${siteConfig.instructor.name}`}
        description="The energy behind every class — passionate, patient, and ready to welcome you."
      />
      <FadeIn>
        <div className="mx-auto grid max-w-4xl gap-8 overflow-hidden rounded-3xl border border-brand-plum/10 bg-white shadow-lg md:grid-cols-[240px_1fr]">
          <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-brand-coral to-brand-orange p-8 text-center text-white md:aspect-auto md:min-h-full">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest opacity-80">
                Instructor Photo
              </p>
              <p className="mt-2 font-display text-lg font-bold">
                [Images To Be Added Later]
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
              {siteConfig.instructor.role}
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold text-brand-plum">
              {siteConfig.instructor.name}
            </h3>
            <p className="mt-4 leading-relaxed text-brand-plum/75">
              {siteConfig.instructor.bio}
            </p>
            <div className="mt-6">
              <Button href="/about" variant="outline">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
