import { Check } from "lucide-react";
import CenterOverhead2 from "@/assets/CenterOverhead2.jpg";
import CenterOverhead3 from "@/assets/CenterOverhead3.jpg";
import CenterBuilding from "@/assets/CenterBuilding.jpg";
import CenterSign from "@/assets/CenterSign.jpg";

const rows = [
  {
    title: "Flexible footprints for small and mid‑sized businesses",
    desc: "Whether you need a compact 400 sq ft service suite or a full 6,000 sq ft retail floor, we can accommodate a range of operations under one roof.",
    bullets: ["Right‑sized suites", "Adaptable layouts", "Room to grow"],
    image: "Suite Interior — Open Floorplan",
  },
  {
    title: "Affordable commercial space in a convenient location",
    desc: "Competitive lease rates on Melrose Avenue keep overhead manageable while putting your business in front of steady daily traffic.",
    bullets: ["Cost‑effective leasing", "High daily traffic count", "Established corridor"],
    image: "Storefront Signage Detail",
  },
  {
    title: "Ideal for retail, services, and local entrepreneurs",
    desc: "A complementary tenant mix supports a true neighborhood business hub — retailers, service providers, and small offices side by side.",
    bullets: ["Retail‑ready frontage", "Service‑friendly suites", "Office configurations"],
    image: "Tenant Storefronts Row",
  },
  {
    title: "Locally managed with a small‑business focus",
    desc: "Operated by a local LLC that understands the Roanoke–Salem market and prioritizes responsive, owner‑level support for tenants.",
    bullets: ["Local ownership", "Direct communication", "Community‑oriented"],
    image: "Property Management Office",
  },
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why Businesses Choose Us</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary sm:text-4xl">
            A practical home for your business.
          </h2>
        </div>

        <div className="mt-16 space-y-20">
          {rows.map((row, i) => {
            const imageMap = [CenterOverhead2, CenterOverhead3, CenterBuilding, CenterSign];
            const imgSrc = imageMap[i];
            return (
              <div
                key={row.title}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {imgSrc ? (
                  <div className="aspect-[5/4] overflow-hidden rounded-lg bg-secondary">
                    <img src={imgSrc} alt={row.image} className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <ImagePlaceholder label={row.image} aspectRatio="aspect-[5/4]" className="bg-secondary" />
                )}
                <div>
                  <h3 className="font-serif text-2xl font-semibold leading-tight text-primary sm:text-3xl">
                    {row.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground">{row.desc}</p>
                  <ul className="mt-6 space-y-2.5">
                    {row.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm text-foreground">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
