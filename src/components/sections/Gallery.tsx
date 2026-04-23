import { ImagePlaceholder } from "@/components/ImagePlaceholder";

// Load any images placed in `src/assets/` (jpg, png, webp, svg).
// Drop your photos there and they'll be picked up automatically and
// displayed in the same order as the filenames sorted alphabetically.
const photoModules = import.meta.glob('../../assets/*.{jpg,jpeg,png,webp,svg}', { eager: true }) as Record<string, any>;
const photos: string[] = Object.keys(photoModules)
  .sort()
  .map((k) => (photoModules[k] && (photoModules[k].default ?? photoModules[k])));

// Ensure specific photos appear in the desired positions in the gallery.
// Swap `CenterBuilding` and `CenterOverhead2` if both are present.
const photosOrdered = [...photos];
const idxBuilding = photosOrdered.findIndex((p) => p && p.toString().toLowerCase().includes("centerbuilding"));
const idxOverhead2 = photosOrdered.findIndex((p) => p && p.toString().toLowerCase().includes("centeroverhead2"));
if (idxBuilding !== -1 && idxOverhead2 !== -1) {
  [photosOrdered[idxBuilding], photosOrdered[idxOverhead2]] = [photosOrdered[idxOverhead2], photosOrdered[idxBuilding]];
}

const items = [
  { label: "Plaza Exterior — Front", span: "md:col-span-2 md:row-span-2", ratio: "aspect-square md:aspect-auto md:h-full" },
  { label: "Main Signage", span: "", ratio: "aspect-[4/3]" },
  { label: "Suite Interior — Retail", span: "", ratio: "aspect-[4/3]" },
  { label: "Parking Lot", span: "", ratio: "aspect-[4/3]" },
  { label: "Suite Interior — Office", span: "", ratio: "aspect-[4/3]" },
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
          {items.map((it, idx) => {
            const src = photosOrdered[idx];
            return (
              <div key={it.label} className={`${it.span} h-full`}>
                {src ? (
                  <div className={`${it.ratio} overflow-hidden rounded-lg`}>
                    <img src={src} alt={it.label} className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <ImagePlaceholder label={it.label} aspectRatio={it.ratio} className="bg-secondary" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
