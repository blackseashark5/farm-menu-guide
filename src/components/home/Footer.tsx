import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Seeds", slug: "seeds" },
      { label: "Crop Protection", slug: "crop-protection" },
      { label: "Crop Nutrition", slug: "crop-nutrition" },
      { label: "Implements", slug: "implements" },
      { label: "Animal Husbandry", slug: "animal-husbandry" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Organic Range", slug: "organic" },
      { label: "Tapas Store", slug: "tapas" },
      { label: "Blogs", slug: "blogs" },
      { label: "Vedika", slug: "vedika" },
      { label: "Bulk Orders", slug: "offers" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Sprayers", slug: "sprayers" },
      { label: "Irrigation", slug: "irrigation" },
      { label: "Safety Kits", slug: "safety-kit" },
      { label: "Urban Garden", slug: "urban-garden" },
      { label: "Services", slug: "services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-deep text-brand-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-lg" aria-hidden>
              🌿
            </span>
            <span className="text-2xl font-extrabold">
              Kisaan<span className="text-saffron">Seva</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-brand-foreground/80">
            India's trusted agri-input marketplace — genuine seeds, crop protection, nutrition and
            farm machinery delivered to your village.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-saffron" aria-hidden />
              <a href="mailto:ranveer4us@gmail.com" className="hover:underline">
                ranveer4us@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-saffron" aria-hidden />
              <a href="tel:+911800300024" className="hover:underline">
                1800-3000-2434
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron" aria-hidden />
              <span>Ranveer Agri Solutions, Sector 21, Bengaluru, Karnataka 560001</span>
            </li>
          </ul>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-bold tracking-wide uppercase">{col.title}</h3>
            <div className="mt-3 mb-4 h-px w-10 bg-saffron" />
            <ul className="space-y-2 text-sm text-brand-foreground/80">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to="/category/$slug"
                    params={{ slug: link.slug }}
                    className="hover:text-brand-foreground hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-6 py-5 text-xs text-brand-foreground/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kisaan Seva. Built by Ranveer — ranveer4us@gmail.com</p>
          <p>
            Privacy Policy · Terms of Use ·{" "}
            <a href="/sitemap.xml" className="hover:underline">
              Sitemap
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
