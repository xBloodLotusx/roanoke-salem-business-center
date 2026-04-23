import { useEffect } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { WhyUs } from "@/components/sections/WhyUs";
import { Location } from "@/components/sections/Location";
import { Gallery } from "@/components/sections/Gallery";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Roanoke‑Salem Business Center | Commercial Suites on Melrose Ave";

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Roanoke‑Salem Business Center: a multi‑tenant commercial plaza at 4142 Melrose Ave NW offering flexible retail, office, and service suites. Serving Roanoke and Salem since 1962.",
    );
    setMeta("og:title", "Roanoke‑Salem Business Center", "property");
    setMeta(
      "og:description",
      "Flexible retail, office, and service suites on Melrose Avenue in Roanoke, VA. Established 1962.",
      "property",
    );

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyUs />
        <Location />
        <Gallery />
        <CtaStrip />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
