import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const SITE_URL = (process.env.VITE_SITE_URL || "https://www.snackdulion.fr").replace(/\/$/, "");

const paths = [
  "/",
  "/carte",
  "/carte/pizzas",
  "/carte/sandwichs",
  "/carte/tacos",
  "/carte/burgers",
  "/carte/specialites-tunisiennes",
  "/carte/formules-boissons",
  "/notre-histoire",
  "/contact",
];

const today = new Date().toISOString().slice(0, 10);

const urls = paths
  .map(
    (path) => `  <url>
    <loc>${SITE_URL}${path === "/" ? "" : path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${path === "/" ? "1.0" : path === "/carte" ? "0.9" : "0.8"}</priority>
  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const outDir = join(root, "public");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "sitemap.xml"), sitemap, "utf8");
console.log(`Sitemap généré : ${paths.length} URLs → public/sitemap.xml`);
