import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CtaStrip = () => {
  return (
    <section className="bg-gradient-hero py-16 md:py-20">
      <div className="container flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl">
            Suites Available — Inquire Today.
          </h2>
          <p className="mt-3 text-primary-foreground/80">
            Contact our local leasing team to learn what's currently open at 4142 Melrose Ave NW.
          </p>
        </div>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="#contact">
            Contact Leasing <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};
