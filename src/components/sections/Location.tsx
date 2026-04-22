import { MapPin, Navigation, Building, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Location = () => {
  return (
    <section id="location" className="bg-secondary/40 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Location & Access</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary sm:text-4xl">
            On the Melrose Avenue corridor.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Card className="border-border/60 bg-card shadow-soft lg:col-span-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Address</p>
                  <p className="mt-1 font-serif text-xl font-semibold text-primary">Roanoke‑Salem Business Center</p>
                  <p className="mt-1 text-foreground">
                    4142 Melrose Ave NW
                    <br />
                    Roanoke, VA 24017
                  </p>
                </div>
              </div>

              <hr className="my-7 border-border/60" />

              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <Building className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    <strong className="text-foreground">Nearby landmarks:</strong>{" "}
                    <span className="text-muted-foreground">
                      Located along Melrose Ave NW, near established residential neighborhoods, schools, and
                      retail clusters serving northwest Roanoke.
                    </span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Car className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    <strong className="text-foreground">Traffic flow:</strong>{" "}
                    <span className="text-muted-foreground">
                      A steady‑traffic commercial corridor with strong daily vehicle counts and dependable
                      visibility for storefront tenants.
                    </span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Navigation className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    <strong className="text-foreground">Accessibility:</strong>{" "}
                    <span className="text-muted-foreground">
                      Quick connections to major Roanoke roads and convenient driving access between
                      Roanoke and Salem.
                    </span>
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="lg:col-span-3">
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-lg border border-border bg-card shadow-soft">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Stylized road */}
              <div className="absolute left-0 right-0 top-1/2 h-12 -translate-y-1/2 bg-primary/80">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-[repeating-linear-gradient(90deg,hsl(var(--accent-foreground))_0_18px,transparent_18px_36px)]" />
              </div>
              <div className="absolute left-6 top-[calc(50%-44px)] text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/70">
                Melrose Ave NW
              </div>

              {/* Pin */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(100%+10px)]">
                <div className="flex flex-col items-center">
                  <div className="rounded-md bg-card px-3 py-1.5 text-xs font-semibold text-primary shadow-soft">
                    4142 Melrose Ave NW
                  </div>
                  <div className="mt-1 h-3 w-3 rotate-45 bg-accent shadow-soft" />
                </div>
              </div>

              <div className="absolute bottom-3 right-3 rounded bg-background/90 px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                Map placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
