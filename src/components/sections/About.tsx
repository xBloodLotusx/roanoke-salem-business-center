import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  return (
    <section id="about" className="border-t border-border/60 bg-background py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <ImagePlaceholder
            label="Plaza — Heritage to Modern"
            aspectRatio="aspect-[4/5]"
            className="bg-secondary"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About the Property</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            A modernized commercial plaza with deep local roots.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">Roanoke‑Salem Business Center</strong> is a commercial retail
              and office property at <strong className="text-foreground">4142 Melrose Ave NW, Roanoke, VA 24017</strong>,
              offering multiple suites for local businesses along one of the area's most traveled corridors.
            </p>
            <p>
              Originally opened in 1962 as <em>Roanoke‑Salem Plaza</em>, the property has been rebranded and
              updated for the needs of today's retail, office, and service tenants — while keeping the
              visibility, accessibility, and community character that have defined it for generations.
            </p>
            <p>
              Select units may be available for lease, with floor plans typically ranging from{" "}
              <strong className="text-foreground">400 to 6,000 square feet</strong>.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <Badge variant="outline" className="border-primary/30 text-primary">Retail</Badge>
            <Badge variant="outline" className="border-primary/30 text-primary">Office</Badge>
            <Badge variant="outline" className="border-primary/30 text-primary">Service Suites</Badge>
            <Badge variant="outline" className="border-primary/30 text-primary">Multi‑Tenant</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
