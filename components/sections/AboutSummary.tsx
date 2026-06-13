import { siteConfig } from "@/content/site";
import { Section } from "@/components/sections/Section";

export function AboutSummary() {
  return (
    <Section variant="default">
      <div className="mx-auto max-w-3xl rounded-2xl border border-brand-plum/10 bg-white p-8 shadow-sm">
        <h2 className="font-display text-2xl font-bold text-brand-plum sm:text-3xl">
          About {siteConfig.name}
        </h2>
        <p className="mt-4 leading-relaxed text-brand-plum/80">
          {siteConfig.name} is a Zumba dance-fitness studio in Taman Kota Laksamana,
          Melaka, Malaysia. We offer beginner-friendly Zumba classes for adults of
          all fitness levels who want to move, have fun, and build a healthier
          lifestyle. Led by instructor {siteConfig.instructor.name}, our classes
          combine Latin-inspired dance with easy-to-follow choreography in a
          welcoming, non-judgmental environment.
        </p>
        <p className="mt-4 leading-relaxed text-brand-plum/80">
          Whether you are completely new to fitness, returning after a break, or
          looking for a fun way to stay active, you are welcome here. Contact us
          at {siteConfig.phone} or message us on WhatsApp to try a class.
        </p>
      </div>
    </Section>
  );
}
