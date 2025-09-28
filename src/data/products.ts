import { Product } from "@/types/content";

export const products: Product[] = [
  {
    id: "aurora-neo",
    name: "Aurora Neo Steam Suite",
    price: "$8,995",
    description:
      "A frameless glass retreat with chromatherapy lighting and aroma infusion built into a whisper-quiet steam generator.",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
    capacity: "2 person",
    dimensions: "60\" x 38\" x 88\"",
    steamGenerator: "12kW Mesa Infiniti™",
    finishOptions: ["Brushed Nickel", "Matte Black", "Polished Chrome"],
    highlights: [
      "Smart steam scheduling via Mesa Connect app",
      "Dynamic rainfall and handheld fixtures",
      "Integrated eucalyptus aromatherapy well",
    ],
  },
  {
    id: "serenity-luxe",
    name: "Serenity Luxe Corner Spa",
    price: "$7,450",
    description:
      "Space-saving corner configuration featuring hydrotherapy jets, built-in seating, and humidity-balanced ventilation.",
    image:
      "https://images.unsplash.com/photo-1616628182474-d22824db1d98?auto=format&fit=crop&w=1200&q=80",
    capacity: "3 person",
    dimensions: "54\" x 54\" x 86\"",
    steamGenerator: "10kW Mesa Pulse™",
    finishOptions: ["Satin Brass", "Gunmetal", "Snow White"],
    highlights: [
      "Triple-zone hydrotherapy massage",
      "Reclined quartz-composite seating",
      "Whisper-close tempered glass doors",
    ],
  },
  {
    id: "cascade-pro",
    name: "Cascade Pro HydroSteam",
    price: "$10,750",
    description:
      "Commercial-grade performance reimagined for residential sanctuaries with fiber optic lighting and dual steam columns.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    capacity: "4 person",
    dimensions: "72\" x 46\" x 94\"",
    steamGenerator: "15kW Mesa Vanguard™",
    finishOptions: ["Graphite", "Pearl Silver", "Espresso"],
    highlights: [
      "AI humidity sensing for precision climate",
      "Dual zenstone benches with radiant warming",
      "Lifetime anti-scale filtration",
    ],
  },
  {
    id: "solstice-compact",
    name: "Solstice Compact Retreat",
    price: "$5,990",
    description:
      "Minimalist footprint without compromise—ideal for urban residences with adaptive lighting and foldaway seating.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    capacity: "1-2 person",
    dimensions: "48\" x 36\" x 84\"",
    steamGenerator: "8kW Mesa Axis™",
    finishOptions: ["Matte Black", "Frosted Silver"],
    highlights: [
      "Tool-less maintenance panels",
      "360° ambient halo lighting",
      "Waterfall edge tempered glass",
    ],
  },
];
