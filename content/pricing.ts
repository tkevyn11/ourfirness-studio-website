export type PricingTier = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingNote =
  "[Pricing Details] — Replace with your actual class rates and membership options.";

export const pricing: PricingTier[] = [
  {
    id: "drop-in",
    name: "Drop-In Class",
    price: "RM [XX]",
    period: "per class",
    description: "Perfect for trying your first Zumba session.",
    features: ["Single class access", "No commitment", "Great for beginners"],
    highlighted: true,
  },
  {
    id: "monthly",
    name: "Monthly Pass",
    price: "RM [XX]",
    period: "per month",
    description: "Best value for regular dancers who want flexibility.",
    features: [
      "Unlimited Zumba classes",
      "Priority class updates",
      "Member community access",
    ],
  },
  {
    id: "bundle",
    name: "Class Bundle",
    price: "RM [XX]",
    period: "10 classes",
    description: "Flexible pack for busy schedules.",
    features: [
      "10 class credits",
      "Valid for 3 months",
      "Shareable with a friend",
    ],
  },
];
