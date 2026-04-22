import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ArrowRight, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-warm">
      <div className="container grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-8 lg:py-32">
        <div className="flex flex-col justify-center lg:col-span-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Established 1962
          </span>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
            A Community Business Hub Serving{" "}
            <span className="italic text-accent">Roanoke and Salem</span> Since 1962.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A high‑visibility, multi‑tenant commercial plaza on Melrose Avenue offering flexible retail,
            office, and service suites — built on six decades of community presence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#contact">
                Inquire About Leasing <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary">
              <a href="#about">View Property</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            4142 Melrose Ave NW, Roanoke, VA 24017
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative">
            <ImagePlaceholder
              label="Wide Commercial Plaza Hero"
              aspectRatio="aspect-[5/4]"
              className="bg-card shadow-elevated"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-lg border border-border bg-card p-5 shadow-soft md:block">
              <p className="font-serif text-3xl font-semibold text-primary">60+</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Years Serving the Valley</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
