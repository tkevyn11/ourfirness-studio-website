import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "coral" | "teal" | "muted";
  className?: string;
};

const variants = {
  default: "bg-brand-plum/10 text-brand-plum",
  coral: "bg-brand-coral/15 text-brand-coral",
  teal: "bg-brand-teal/15 text-brand-teal",
  muted: "bg-brand-warm/80 text-brand-plum/70",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
