import { faqs } from "@/content/faqs";
import { Accordion } from "@/components/ui/Accordion";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/sections/Section";

export function FaqSection() {
  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know before your first Zumba class in Melaka."
      />
      <FadeIn>
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </FadeIn>
    </Section>
  );
}
