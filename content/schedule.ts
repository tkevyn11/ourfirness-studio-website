export type ClassColor =
  | "zumba"
  | "tabata"
  | "trx"
  | "fitbounce"
  | "strong-nation"
  | "circuit-training";

export const classColors: Record<ClassColor, string> = {
  zumba: "#FCD34D",
  tabata: "#FB923C",
  trx: "#F87171",
  fitbounce: "#F472B6",
  "strong-nation": "#60A5FA",
  "circuit-training": "#22D3EE",
};

export type ScheduleRow = {
  day: string;
  time: string;
  className: string;
  classId: ClassColor;
  instructor: string;
  level: string;
};

export const scheduleNote =
  "Morning and evening sessions Monday to Friday. Message us on WhatsApp to confirm your spot before class.";

export const schedule: ScheduleRow[] = [
  {
    day: "Monday",
    time: "8:30 AM – 9:30 AM",
    className: "Zumba",
    classId: "zumba",
    instructor: "Pearly Kong",
    level: "All levels",
  },
  {
    day: "Monday",
    time: "9:45 AM – 10:15 AM",
    className: "Tabata",
    classId: "tabata",
    instructor: "Pearly Kong",
    level: "High intensity",
  },
  {
    day: "Monday",
    time: "5:45 PM – 6:15 PM",
    className: "Tabata",
    classId: "tabata",
    instructor: "Pearly Kong",
    level: "High intensity",
  },
  {
    day: "Monday",
    time: "6:30 PM – 7:30 PM",
    className: "Strong Nation",
    classId: "strong-nation",
    instructor: "Pearly Kong",
    level: "High intensity",
  },
  {
    day: "Tuesday",
    time: "8:30 AM – 9:30 AM",
    className: "Fitbounce",
    classId: "fitbounce",
    instructor: "Pearly Kong",
    level: "All levels",
  },
  {
    day: "Tuesday",
    time: "9:45 AM – 10:15 AM",
    className: "TRX",
    classId: "trx",
    instructor: "Pearly Kong",
    level: "Scalable",
  },
  {
    day: "Tuesday",
    time: "5:45 PM – 6:15 PM",
    className: "TRX",
    classId: "trx",
    instructor: "Pearly Kong",
    level: "Scalable",
  },
  {
    day: "Tuesday",
    time: "6:30 PM – 7:30 PM",
    className: "Zumba",
    classId: "zumba",
    instructor: "Pearly Kong",
    level: "All levels",
  },
  {
    day: "Wednesday",
    time: "8:30 AM – 9:30 AM",
    className: "Strong Nation",
    classId: "strong-nation",
    instructor: "Pearly Kong",
    level: "High intensity",
  },
  {
    day: "Wednesday",
    time: "5:45 PM – 6:15 PM",
    className: "Strong Nation",
    classId: "strong-nation",
    instructor: "Pearly Kong",
    level: "High intensity",
  },
  {
    day: "Wednesday",
    time: "6:30 PM – 7:30 PM",
    className: "Zumba",
    classId: "zumba",
    instructor: "Pearly Kong",
    level: "All levels",
  },
  {
    day: "Wednesday",
    time: "7:45 PM – 8:45 PM",
    className: "Strong Nation",
    classId: "strong-nation",
    instructor: "Pearly Kong",
    level: "High intensity",
  },
  {
    day: "Thursday",
    time: "8:30 AM – 9:30 AM",
    className: "Fitbounce",
    classId: "fitbounce",
    instructor: "Pearly Kong",
    level: "All levels",
  },
  {
    day: "Thursday",
    time: "9:45 AM – 10:15 AM",
    className: "TRX",
    classId: "trx",
    instructor: "Pearly Kong",
    level: "Scalable",
  },
  {
    day: "Thursday",
    time: "10:15 AM – 11:15 AM",
    className: "Zumba",
    classId: "zumba",
    instructor: "Pearly Kong",
    level: "All levels",
  },
  {
    day: "Thursday",
    time: "5:45 PM – 6:15 PM",
    className: "TRX",
    classId: "trx",
    instructor: "Pearly Kong",
    level: "Scalable",
  },
  {
    day: "Thursday",
    time: "6:30 PM – 7:30 PM",
    className: "Fitbounce",
    classId: "fitbounce",
    instructor: "Pearly Kong",
    level: "All levels",
  },
  {
    day: "Friday",
    time: "8:30 AM – 9:30 AM",
    className: "Zumba",
    classId: "zumba",
    instructor: "Pearly Kong",
    level: "All levels",
  },
  {
    day: "Friday",
    time: "9:45 AM – 10:15 AM",
    className: "Circuit Training",
    classId: "circuit-training",
    instructor: "Pearly Kong",
    level: "Medium to high",
  },
  {
    day: "Friday",
    time: "5:45 PM – 6:15 PM",
    className: "Circuit Training",
    classId: "circuit-training",
    instructor: "Pearly Kong",
    level: "Medium to high",
  },
  {
    day: "Friday",
    time: "6:30 PM – 7:30 PM",
    className: "Strong Nation",
    classId: "strong-nation",
    instructor: "Pearly Kong",
    level: "High intensity",
  },
];

export const scheduleClassFilters = [
  { id: "all", label: "All classes" },
  { id: "zumba", label: "Zumba" },
  { id: "tabata", label: "Tabata" },
  { id: "trx", label: "TRX" },
  { id: "fitbounce", label: "Fitbounce" },
  { id: "strong-nation", label: "Strong Nation" },
  { id: "circuit-training", label: "Circuit Training" },
] as const;
