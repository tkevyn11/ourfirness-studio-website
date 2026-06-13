import type { ClassItem } from "@/content/classes";
import { ClassBadges } from "@/components/sections/ClassBadges";
import { FadeIn } from "@/components/motion/FadeIn";

export function ClassCard({ cls, index = 0 }: { cls: ClassItem; index?: number }) {
  return (
    <FadeIn delay={index * 0.08}>
      <article className="flex h-full flex-col rounded-2xl border border-brand-plum/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-brand-coral/10">
        <h3 className="font-display text-xl font-bold text-brand-plum">
          {cls.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-plum/70">
          {cls.description}
        </p>
        <div className="mt-4">
          <ClassBadges cls={cls} />
        </div>
        <ul className="mt-4 space-y-1">
          {cls.highlights.map((h) => (
            <li
              key={h}
              className="flex items-center gap-2 text-sm text-brand-plum/80 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-coral before:content-['']"
            >
              {h}
            </li>
          ))}
        </ul>
      </article>
    </FadeIn>
  );
}
