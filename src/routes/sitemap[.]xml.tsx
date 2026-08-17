import { createFileRoute } from "@tanstack/react-router";
import { categories } from "@/data/catalog";

const SITE = "https://farm-menu-guide.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = [
          { loc: `${SITE}/`, priority: "1.0" },
          { loc: `${SITE}/track`, priority: "0.5" },
          { loc: `${SITE}/wishlist`, priority: "0.4" },
          ...categories.map((c) => ({
            loc: `${SITE}/category/${c.slug}`,
            priority: c.parent ? "0.6" : "0.8",
          })),
        ];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><changefreq>weekly</changefreq><priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
