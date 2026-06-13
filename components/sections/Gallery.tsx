import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/sections/Section";

const placeholders = [
  "Zumba class in action",
  "Studio interior in Melaka",
  "Group fitness community",
  "Dance fitness session",
  "Instructor leading class",
  "Members celebrating after class",
];

export function Gallery() {
  return (
    <Section id="gallery" variant="warm">
      <SectionHeader
        eyebrow="Gallery"
        title="See the Energy"
        description="[Images To Be Added Later] — Real studio and class photos coming soon."
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {placeholders.map((alt, index) => (
          <FadeIn key={alt} delay={index * 0.05}>
            <div
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-coral/80 via-brand-orange/70 to-brand-teal/80 shadow-md"
              role="img"
              aria-label={alt}
            >
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-xs font-medium text-white/90 opacity-0 transition-opacity group-hover:opacity-100">
                  {alt}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
