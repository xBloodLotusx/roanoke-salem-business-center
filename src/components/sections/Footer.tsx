import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl font-semibold">Roanoke‑Salem Business Center</p>
            <p className="mt-2 text-sm text-primary-foreground/70">Originally opened 1962 as Roanoke‑Salem Plaza.</p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/80">
              A multi‑tenant commercial plaza offering retail, office, and service suites along the
              Melrose Avenue corridor in northwest Roanoke.
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Leasing Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-primary-foreground/85">
                  4142 Melrose Ave NW
                  <br />
                  Roanoke, VA 24017
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-primary-foreground/85">(540) 000‑0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href="mailto:leasing@roanokesalembc.com"
                  className="text-primary-foreground/85 underline-offset-4 hover:underline"
                >
                  leasing@roanokesalembc.com
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["#about", "About"],
                ["#features", "Features"],
                ["#why-us", "Why Us"],
                ["#location", "Location"],
                ["#gallery", "Gallery"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-primary-foreground/80 transition-colors hover:text-accent">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Roanoke‑Salem Business Center. All rights reserved.</p>
          <p>Serving the Roanoke–Salem community since 1962.</p>
        </div>
      </div>
    </footer>
  );
};
