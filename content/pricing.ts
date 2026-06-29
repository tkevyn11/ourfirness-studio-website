export type PricingTier = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  savingsNote?: string;
};

export const pricingNote =
  "All fees are calculated monthly and are non-transferable. Registration fee RM50 applies to new members. Entrance fee RM15 per person for all attendees.";

export const pricingRegistrationFee = "RM50";

export const pricingEntranceFee = "RM15";

export const pricingSpecialDeal = {
  title: "Fitness Deal Alert",
  description: "Buy 3 Unlimited months, get 1 FREE",
  price: "RM480",
  detail: "Four months of unlimited classes for the price of three.",
};

export const pricingTerms = [
  "The studio reserves the right to reschedule classes due to unforeseen circumstances.",
  "Entrance fee: RM15 per person for all attendees.",
  "All fees are calculated on a monthly basis and are non-transferable.",
  "Classes are subject to cancellation if attendance is below 5 attendees.",
];

export const pricing: PricingTier[] = [
  {
    id: "trial",
    name: "First Trial Session",
    price: "RM10",
    period: "one-time",
    description: "New members only. The easiest way to try OurFitness Studio.",
    features: [
      "Your first class for RM10",
      "No dance or gym experience needed",
      "Walk-in rate is RM25 after trial",
    ],
    highlighted: true,
    badge: "Welcome Offer",
  },
  {
    id: "drop-in",
    name: "Walk-In",
    price: "RM25",
    period: "per class",
    description: "Drop in when it suits your schedule. No package required.",
    features: [
      "Single class access",
      "Pay per visit",
      "Great for occasional visits",
    ],
  },
  {
    id: "4-class",
    name: "4-Class Pack",
    price: "RM80",
    period: "4 classes",
    description: "Flexible pack for members who train a few times a month.",
    features: [
      "RM20 per class",
      "Use across all class types",
      "Monthly billing",
    ],
    savingsNote: "Save RM20 vs four walk-ins",
  },
  {
    id: "8-class",
    name: "8-Class Pack",
    price: "RM140",
    period: "8 classes",
    description: "More classes, lower cost per session.",
    features: [
      "RM17.50 per class",
      "Use across all class types",
      "Monthly billing",
    ],
    badge: "Popular",
    savingsNote: "Save RM60 vs eight walk-ins",
  },
  {
    id: "unlimited",
    name: "Unlimited Monthly",
    price: "RM160",
    period: "per month",
    description: "Best value for members who love morning and evening classes.",
    features: [
      "Unlimited classes all week",
      "All 6 class types included",
      "Morning and evening sessions",
    ],
    badge: "Best Value",
    savingsNote: "Unlimited access from RM5.33 per class",
  },
  {
    id: "annual",
    name: "1-Year Membership",
    price: "RM1,200",
    period: "per year",
    description: "Commit for the year and save compared to monthly unlimited.",
    features: [
      "RM100 per month equivalent",
      "Unlimited classes for 12 months",
      "Best long-term value",
    ],
    savingsNote: "Save RM720 vs 12 monthly unlimited passes",
  },
];
