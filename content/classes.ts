export type ClassItem = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  whoItsFor: string;
  intensity: string;
  complexity: string;
  duration: string;
  highlights: string[];
  scheduleHint: string;
  image: {
    src: string;
    alt: string;
  };
};

export const classes: ClassItem[] = [
  {
    id: "zumba",
    name: "Zumba",
    tagline: "Dance fitness that feels like a party.",
    description:
      "Zumba blends Latin rhythms with easy-to-follow dance moves for a full-body cardio workout. You do not need dance experience. Instructor Pearly Kong breaks down steps so beginners feel welcome from the first song. Expect upbeat music, smiling faces, and a serious sweat by the end of class.",
    whoItsFor:
      "Anyone who wants fun cardio, including complete beginners and members who prefer dance over traditional gym workouts.",
    intensity: "Medium",
    complexity: "Easy to Moderate",
    duration: "60 mins",
    highlights: ["Full-body cardio", "Beginner-friendly", "High-energy music"],
    scheduleHint: "Monday, Tuesday, Wednesday, Thursday, and Friday",
    image: {
      src: "/classes/zumba.jpg",
      alt: "Zumba dance fitness class at OurFitness Studio in Melaka",
    },
  },
  {
    id: "tabata",
    name: "Tabata",
    tagline: "Maximum effort in 30 minutes. No equipment needed.",
    description:
      "Tabata uses 20 seconds of all-out work followed by 10 seconds of rest, repeated in short rounds that push your heart rate and burn calories fast. It is one of the most time-efficient workouts at OurFitness Studio, ideal if you want results without spending an hour in the gym. Every session is coach-led so you know exactly when to push and when to recover.",
    whoItsFor:
      "Busy professionals, HIIT fans, and anyone who wants a short, sweaty session before or after work.",
    intensity: "High",
    complexity: "Moderate",
    duration: "30 mins",
    highlights: [
      "30-minute sessions",
      "Fat-burning intervals",
      "Coach-timed rounds",
    ],
    scheduleHint: "Monday mornings and evenings",
    image: {
      src: "/classes/tabata.jpg",
      alt: "Tabata HIIT interval class at OurFitness Studio in Melaka",
    },
  },
  {
    id: "trx",
    name: "TRX Suspension Training",
    tagline: "Use your body weight. Build real strength.",
    description:
      "TRX uses suspension straps to train strength, core stability, and balance using your own body weight. Moves can be scaled up or down, so beginners and regular gym-goers train in the same class. Expect a full-body session that targets arms, core, and legs in every round.",
    whoItsFor:
      "Members who want strength and toning without heavy weights, including beginners building a fitness base.",
    intensity: "Medium to High",
    complexity: "Scalable",
    duration: "30 mins",
    highlights: [
      "Full-body strength",
      "Scalable for all levels",
      "Core-focused",
    ],
    scheduleHint: "Tuesday and Thursday, morning and evening",
    image: {
      src: "/classes/trx.jpg",
      alt: "TRX suspension training class at OurFitness Studio in Melaka",
    },
  },
  {
    id: "fitbounce",
    name: "Fitbounce",
    tagline: "Low-impact cardio on the rebounder. High energy, easy on joints.",
    description:
      "Fitbounce is a rebounder-based cardio class that keeps the fun high and impact low. The mini-trampoline absorbs shock, making it gentler on knees and ankles while still delivering a serious sweat. You will bounce, move, and build stamina in a supportive group setting.",
    whoItsFor:
      "Anyone who wants cardio without pounding the floor, including members returning from injury or new to group fitness.",
    intensity: "Medium",
    complexity: "Easy to Moderate",
    duration: "60 mins",
    highlights: [
      "Joint-friendly cardio",
      "Full-hour session",
      "Fun, upbeat atmosphere",
    ],
    scheduleHint: "Tuesday and Thursday mornings; Thursday evening",
    image: {
      src: "/classes/fitbounce.jpg",
      alt: "Fitbounce rebounder cardio class at OurFitness Studio in Melaka",
    },
  },
  {
    id: "strong-nation",
    name: "Strong Nation",
    tagline: "HIIT synced to the beat. Strength meets music.",
    description:
      "Strong Nation combines high-intensity athletic training with music-driven timing so every rep, lunge, and jump lands on the beat. It is not a dance class. It is a powerful HIIT workout that builds endurance, strength, and mental grit. Expect squats, burpees, plyometrics, and coach cues that keep you moving safely.",
    whoItsFor:
      "Members who love structured HIIT, want to level up fitness, and respond well to music-driven motivation.",
    intensity: "High",
    complexity: "Moderate to High",
    duration: "60 mins",
    highlights: [
      "Music-synced HIIT",
      "Strength + cardio",
      "60-minute full workout",
    ],
    scheduleHint: "Monday, Wednesday, and Friday",
    image: {
      src: "/classes/strong-nation.jpg",
      alt: "Strong Nation HIIT class at OurFitness Studio in Melaka",
    },
  },
  {
    id: "circuit-training",
    name: "Circuit Training",
    tagline: "Rotate. Work. Repeat. Full-body conditioning in 30 minutes.",
    description:
      "Circuit Training moves you through stations of strength and cardio exercises with minimal rest between rounds. You work at your own pace within each station while the coach keeps the room moving. It is a practical way to build stamina, tone muscle, and break out of a cardio-only routine.",
    whoItsFor:
      "Members who like variety, want total-body conditioning, and prefer structured rounds over open gym time.",
    intensity: "Medium to High",
    complexity: "Moderate",
    duration: "30 mins",
    highlights: [
      "Station-based variety",
      "Strength + cardio mix",
      "30-minute format",
    ],
    scheduleHint: "Friday mornings and evenings",
    image: {
      src: "/classes/circuit-training.jpg",
      alt: "Circuit training class at OurFitness Studio in Melaka",
    },
  },
];
