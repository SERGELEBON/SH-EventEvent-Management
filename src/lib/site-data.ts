export const COMPANY = {
  name: "SH Event Management",
  slogan: "Quality Service, Our Passion…",
  shortSlogan: "Quality Service, Our Passion",
  tagline: "Your event, our equipment, your peace of mind",
  phones: ["0244 154 664", "0257 572 090"],
  phoneIntl: ["+233244154664", "+233257572090"],
  whatsapp: "233244154664",
  email: "sheventmgt@gmail.com",
  locationShort: "Madina, Accra — Ghana",
  locationFull:
    "Opposite Hannah School Complex, Madina, Accra — Ghana",
  currency: "GH₵",
};

export type ServiceKey = "equipment" | "comfort" | "photography";

export const SERVICES: {
  key: ServiceKey;
  title: string;
  short: string;
  description: string;
  image: string;
  items: string[];
  anchor: string;
}[] = [
  {
    key: "equipment",
    title: "Event Equipment Rental",
    short: "Equipment Rental",
    description:
      "Tents & marquees, white folding chairs, gold Chiavari chairs and plastic chairs — everything you need to host a flawless event.",
    image: "/images/service-equipment.jpg",
    anchor: "location-evenementiel",
    items: [
      "White folding chairs",
      "Gold Chiavari chairs",
      "White plastic chairs",
      "Tents & marquees (all sizes)",
    ],
  },
  {
    key: "comfort",
    title: "Comfort & Event Logistics",
    short: "Comfort & Logistics",
    description:
      "Keep your guests comfortable with evaporative coolers, durable event flooring and clean mobile toilets — delivered and installed on site.",
    image: "/images/service-comfort.jpg",
    anchor: "confort-logistique",
    items: [
      "Air conditioners & evaporative coolers",
      "Event flooring / interlocking tiles",
      "Mobile toilets",
    ],
  },
  {
    key: "photography",
    title: "Event Photography",
    short: "Photography",
    description:
      "Professional reporting photography for weddings, ceremonies and corporate events — capturing every unforgettable moment in vivid detail.",
    image: "/images/service-photography.jpg",
    anchor: "photographie",
    items: [
      "Wedding photography",
      "Ceremonies & parties",
      "Corporate event coverage",
    ],
  },
];

export const REALIZATIONS = [
  {
    title: "Garden Wedding Ceremony",
    category: "Wedding",
    image: "/images/realization-1.jpg",
  },
  {
    title: "Corporate Conference Setup",
    category: "Corporate",
    image: "/images/realization-2.jpg",
  },
  {
    title: "Birthday Garden Reception",
    category: "Private Reception",
    image: "/images/realization-3.jpg",
  },
  {
    title: "Community Public Event",
    category: "Public Event",
    image: "/images/realization-4.jpg",
  },
];

export const INSPIRATIONS = [
  {
    title: "Outdoor Wedding Reception",
    image: "/images/inspiration-1.jpg",
  },
  {
    title: "Corporate Gala Dinner",
    image: "/images/inspiration-2.jpg",
  },
  {
    title: "Traditional Celebration",
    image: "/images/inspiration-3.jpg",
  },
];

export const TESTIMONIALS = [
  {
    name: "Akosua M.",
    role: "Bride, East Legon",
    quote:
      "SH Event Management set up our tents and Chiavari chairs beautifully. The team arrived on time and the quality was outstanding.",
  },
  {
    name: "David O.",
    role: "Corporate Event Planner",
    quote:
      "Reliable equipment, fair pricing and great service. They handled everything from flooring to mobile toilets for our 500-guest conference.",
  },
  {
    name: "Fatima A.",
    role: "Birthday Celebration, Madina",
    quote:
      "The photographer captured moments we will cherish forever. Highly recommended for any event in Accra.",
  },
  {
    name: "Kwabena T.",
    role: "Church Event Coordinator",
    quote:
      "From chairs to coolers, SH Event Management delivered and installed everything without a hitch. True professionals.",
  },
];

export const EVENT_TYPES = [
  "Wedding",
  "Corporate Event",
  "Associative Event",
  "Birthday / Private Reception",
  "Conference",
  "Funerals",
  "Other",
];

export const NAV_LINKS: { label: string; anchor: string }[] = [
  { label: "Home", anchor: "home" },
  { label: "Equipment Rental", anchor: "location-evenementiel" },
  { label: "Comfort & Logistics", anchor: "confort-logistique" },
  { label: "Photography", anchor: "photographie" },
  { label: "Our Realizations", anchor: "nos-realisations" },
  { label: "Why Choose Us", anchor: "pourquoi-nous-choisir" },
  { label: "About Us", anchor: "qui-sommes-nous" },
  { label: "Contact", anchor: "contact" },
];
