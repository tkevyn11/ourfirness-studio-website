import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-gradient-to-r from-brand-coral to-brand-orange text-white shadow-lg shadow-brand-coral/25 hover:shadow-brand-coral/40 hover:brightness-105",
  secondary:
    "bg-brand-teal text-white shadow-md hover:bg-brand-teal/90",
  outline:
    "border-2 border-brand-plum/20 bg-white text-brand-plum hover:border-brand-coral hover:text-brand-coral",
  whatsapp:
    "bg-[#25D366] text-white shadow-md hover:bg-[#20bd5a]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonProps) {
  // className last so tailwind-merge resolves conflicts with variant utilities
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
