import { schedule, scheduleNote } from "@/content/schedule";
import { siteConfig, whatsappUrl } from "@/content/site";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function ScheduleTable() {
  return (
    <Section id="schedule">
      <SectionHeader
        eyebrow="Class Times"
        title="Weekly Class Schedule"
        description={scheduleNote}
      />
      <FadeIn>
        <div className="overflow-x-auto rounded-2xl border border-brand-plum/10 bg-white shadow-sm">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-brand-plum/10 bg-brand-warm/50">
                <th scope="col" className="px-5 py-4 font-semibold text-brand-plum">
                  Day
                </th>
                <th scope="col" className="px-5 py-4 font-semibold text-brand-plum">
                  Time
                </th>
                <th scope="col" className="px-5 py-4 font-semibold text-brand-plum">
                  Class
                </th>
                <th scope="col" className="px-5 py-4 font-semibold text-brand-plum">
                  Instructor
                </th>
                <th scope="col" className="px-5 py-4 font-semibold text-brand-plum">
                  Level
                </th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr
                  key={`${row.day}-${row.time}`}
                  className="border-b border-brand-plum/5 last:border-0"
                >
                  <td className="px-5 py-4 font-medium text-brand-plum">{row.day}</td>
                  <td className="px-5 py-4 text-brand-plum/80">{row.time}</td>
                  <td className="px-5 py-4 text-brand-plum/80">{row.className}</td>
                  <td className="px-5 py-4 text-brand-plum/80">{row.instructor}</td>
                  <td className="px-5 py-4 text-brand-plum/80">{row.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
      <div className="mt-8 text-center">
        <Button
          href={whatsappUrl(siteConfig.whatsappMessages.schedule)}
          external
          variant="primary"
        >
          Ask About Schedule on WhatsApp
        </Button>
      </div>
    </Section>
  );
}
