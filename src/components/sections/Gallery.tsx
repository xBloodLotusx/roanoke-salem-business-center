import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const items = [
  { label: "Plaza Exterior — Front", span: "md:col-span-2 md:row-span-2", ratio: "aspect-square md:aspect-auto md:h-full" },
  { label: "Main Signage", span: "", ratio: "aspect-[4/3]" },
  { label: "Suite Interior — Retail", span: "", ratio: "aspect-[4/3]" },
  { label: "Parking Lot", span: "", ratio: "aspect-[4/3]" },
  { label: "Suite Interior — Office", span: "", ratio: "aspect-[4/3]" },
  { label: "Storefront Detail", span: "md:col-span-2", ratio: "aspect-[16/9]" },
  { label: "Surrounding Area — Melrose Ave", span: "md:col-span-2", ratio: "aspect-[16/9]" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Photo Gallery</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary sm:text-4xl">
            A look around the property.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Exterior views, suite interiors, signage, and the surrounding Melrose Avenue area.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((it) => (
            <div key={it.label} className={`${it.span} h-full`}>
              <ImagePlaceholder label={it.label} aspectRatio="h-full w-full" className="bg-secondary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
