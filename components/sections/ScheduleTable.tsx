"use client";

import { useMemo, useState } from "react";
import {
  schedule,
  scheduleNote,
  scheduleClassFilters,
  classColors,
  type ClassColor,
} from "@/content/schedule";
import { siteConfig, whatsappUrl } from "@/content/site";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/utils";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;

export function ScheduleTable() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredSchedule = useMemo(() => {
    if (activeFilter === "all") return schedule;
    return schedule.filter((row) => row.classId === activeFilter);
  }, [activeFilter]);

  const scheduleByDay = useMemo(() => {
    return days.map((day) => ({
      day,
      sessions: filteredSchedule.filter((row) => row.day === day),
    }));
  }, [filteredSchedule]);

  return (
    <Section id="schedule">
      <SectionHeader
        eyebrow="Class Times"
        title="Weekly Class Schedule"
        description={scheduleNote}
      />

      <FadeIn>
        <div className="mb-6 flex flex-wrap gap-2">
          {scheduleClassFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeFilter === filter.id
                  ? "border-brand-coral bg-brand-coral text-white"
                  : "border-brand-plum/15 bg-white text-brand-plum/80 hover:border-brand-coral/40",
              )}
              style={
                activeFilter === filter.id && filter.id !== "all"
                  ? {
                      backgroundColor: classColors[filter.id as ClassColor],
                      borderColor: classColors[filter.id as ClassColor],
                      color: "#1a1020",
                    }
                  : undefined
              }
            >
              {filter.label}
            </button>
          ))}
        </div>
      </FadeIn>

      <FadeIn>
        <div className="hidden gap-4 lg:grid lg:grid-cols-5">
          {scheduleByDay.map(({ day, sessions }) => (
            <div
              key={day}
              className="overflow-hidden rounded-2xl border border-brand-plum/10 bg-white shadow-sm"
            >
              <div className="border-b border-brand-plum/10 bg-brand-warm/60 px-4 py-3">
                <h3 className="font-display text-sm font-bold text-brand-plum">
                  {day}
                </h3>
              </div>
              <div className="space-y-3 p-3">
                {sessions.length === 0 ? (
                  <p className="px-1 py-6 text-center text-sm text-brand-plum/50">
                    No matching classes
                  </p>
                ) : (
                  sessions.map((row) => (
                    <ScheduleSessionCard key={`${row.day}-${row.time}`} row={row} />
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 lg:hidden">
          {scheduleByDay.map(({ day, sessions }) =>
            sessions.length === 0 ? null : (
              <div
                key={day}
                className="overflow-hidden rounded-2xl border border-brand-plum/10 bg-white shadow-sm"
              >
                <div className="border-b border-brand-plum/10 bg-brand-warm/60 px-4 py-3">
                  <h3 className="font-display text-sm font-bold text-brand-plum">
                    {day}
                  </h3>
                </div>
                <div className="divide-y divide-brand-plum/5">
                  {sessions.map((row) => (
                    <div key={`${row.day}-${row.time}`} className="p-4">
                      <ScheduleSessionCard row={row} compact />
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
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

function ScheduleSessionCard({
  row,
  compact = false,
}: {
  row: (typeof schedule)[number];
  compact?: boolean;
}) {
  const color = classColors[row.classId];

  return (
    <div
      className={cn(
        "rounded-xl border border-brand-plum/10 p-3",
        !compact && "bg-brand-warm/20",
      )}
      style={{ borderLeftWidth: "4px", borderLeftColor: color }}
    >
      <p className="text-xs font-medium text-brand-plum/60">{row.time}</p>
      <p className="mt-1 font-display text-sm font-bold text-brand-plum">
        {row.className}
      </p>
      <p className="mt-1 text-xs text-brand-plum/65">
        {row.instructor} · {row.level}
      </p>
      <a
        href={whatsappUrl(
          `Hi! I'd like to join the ${row.className} class on ${row.day} at ${row.time}.`,
        )}
        className="mt-2 inline-block text-xs font-semibold text-brand-coral hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book via WhatsApp
      </a>
    </div>
  );
}
