import { Building2, Eye, FileCheck2, Car, Route, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Building2,
    title: "Flexible Suite Sizes",
    desc: "Spaces from roughly 400 to 6,000 sq ft suit small storefronts and growing offices alike.",
  },
  {
    icon: Eye,
    title: "High‑Traffic Visibility",
    desc: "Direct frontage on Melrose Avenue — one of Roanoke's busiest commercial corridors.",
  },
  {
    icon: FileCheck2,
    title: "General Commercial Zoning",
    desc: "Zoned to support a wide range of retail, office, and service business uses.",
  },
  {
    icon: Car,
    title: "Ample On‑Site Parking",
    desc: "A spacious shared lot makes customer and employee access effortless.",
  },
  {
    icon: Route,
    title: "Easy Road Access",
    desc: "Quick connections to major Roanoke arteries and surrounding neighborhoods.",
  },
  {
    icon: Award,
    title: "Longstanding Presence",
    desc: "Six decades of recognition in the Roanoke–Salem community since 1962.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="bg-secondary/40 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Property Features</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary sm:text-4xl">
            Built for working businesses.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Practical, accessible commercial space designed around real day‑to‑day operations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <Card
              key={title}
              className="group border-border/60 bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <CardContent className="p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
