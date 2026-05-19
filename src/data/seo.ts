import { MENU_CATEGORIES, type CategoryId } from "./menu";
import { SITE } from "./site";
import type { LegalPageId } from "../pages/Legal";
import type { PageId } from "./site";

/** URL canonique du site en production — à définir dans .env : VITE_SITE_URL */
export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
  "https://www.snackdulion.fr";

export const SEO = {
  defaultTitle: `${SITE.name} — Fast-food, pizzas & tacos à Aix-en-Provence`,
  titleSuffix: `${SITE.name} | Aix-en-Provence`,
  defaultDescription:
    "Snack Du Lion à Aix-en-Provence : pizzas, tacos, burgers, sandwichs et spécialités tunisiennes. Sur place, à emporter et livraison (directe, Deliveroo, Uber Eats). 5 Rue Emile Henriot.",
  keywords: [
    "snack aix en provence",
    "fast food aix en provence",
    "pizza aix en provence",
    "tacos aix en provence",
    "burger aix en provence",
    "sandwich aix en provence",
    "livraison pizza aix",
    "restaurant rapide aix",
    "spécialités tunisiennes aix",
    "chapati aix",
    "kebab aix en provence",
    "snack du lion",
    "manger aix centre ville",
    "emporter aix en provence",
    "deliveroo aix snack",
    "uber eats aix pizza",
  ],
  locale: "fr_FR",
  geo: {
    region: "FR-PAC",
    placename: "Aix-en-Provence",
    position: "43.5263;5.4454",
  },
} as const;

export type AppRoute =
  | { type: "page"; page: PageId; categoryId?: null; legal?: null }
  | { type: "category"; page: "carte"; categoryId: CategoryId; legal?: null }
  | { type: "legal"; legal: LegalPageId; page?: null; categoryId?: null };

const CATEGORY_SEO: Record<
  CategoryId,
  { title: string; description: string; keywords: string[] }
> = {
  pizzas: {
    title: "Pizzas à Aix-en-Provence",
    description:
      "Pizzas base tomate et crème fraîche 35 & 40 cm. Commandez au Snack Du Lion, 5 Rue Emile Henriot — sur place, à emporter ou livraison.",
    keywords: ["pizza aix en provence", "pizzeria aix", "livraison pizza aix", "pizza crème fraîche aix"],
  },
  sandwichs: {
    title: "Sandwichs maison à Aix-en-Provence",
    description:
      "Kebab, merguez, escalope, américain… Sandwichs frais avec frites + boisson. Snack Du Lion, fast-food au cœur d'Aix.",
    keywords: ["sandwich aix", "kebab aix en provence", "snack sandwich aix"],
  },
  tacos: {
    title: "Tacos & French tacos à Aix",
    description:
      "Tacos 1, 2 ou 3 viandes, sauces au choix, menus avec frites. Le meilleur du fast-food tacos à Aix-en-Provence.",
    keywords: ["tacos aix en provence", "french tacos aix", "tacos livraison aix"],
  },
  burgers: {
    title: "Burgers & menus à Aix-en-Provence",
    description: "Cheese, double cheese, chicken, fish… Burgers gourmands et menus complets au Snack Du Lion.",
    keywords: ["burger aix en provence", "fast food burger aix"],
  },
  "specialites-tunisiennes": {
    title: "Spécialités tunisiennes — Chapati & Makloub",
    description: "Chapati, makloub, baguette farcie : spécialités tunisiennes authentiques à Aix-en-Provence.",
    keywords: ["chapati aix", "makloub aix", "spécialité tunisienne aix", "restaurant tunisien aix"],
  },
  "formules-boissons": {
    title: "Boissons, desserts & formules",
    description: "Boissons, desserts, tenders et accompagnements. Complétez votre repas au Snack Du Lion.",
    keywords: ["dessert snack aix", "boisson fast food aix"],
  },
};

const PAGE_SEO: Record<PageId, { title: string; description: string; path: string }> = {
  accueil: {
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    path: "/",
  },
  carte: {
    title: `La carte — Pizzas, tacos, burgers | ${SITE.name}`,
    description:
      "Découvrez toute la carte : pizzas, sandwichs, tacos, burgers, spécialités tunisiennes, boissons et desserts. Prix et menus au Snack Du Lion, Aix-en-Provence.",
    path: "/carte",
  },
  histoire: {
    title: `Notre histoire | ${SITE.name} Aix-en-Provence`,
    description:
      "L'histoire du Snack Du Lion : une adresse incontournable du fast-food à Aix-en-Provence pour les pizzas, tacos et spécialités maison.",
    path: "/notre-histoire",
  },
  contact: {
    title: `Contact & horaires | ${SITE.name}`,
    description: `Retrouvez-nous au ${SITE.address.line1}, ${SITE.address.line2}. Tél. ${SITE.phoneDisplay}. Ouvert 7j/7, livraison 19h–22h.`,
    path: "/contact",
  },
};

const LEGAL_SEO: Record<LegalPageId, { title: string; path: string }> = {
  cgv: { title: "Conditions générales de vente", path: "/cgv" },
  confidentialite: { title: "Politique de confidentialité", path: "/politique-confidentialite" },
  cookies: { title: "Politique cookies", path: "/politique-cookies" },
};

export function categoryPath(id: CategoryId): string {
  return `/carte/${id}`;
}

export function getAllSitemapPaths(): string[] {
  const paths = [
    "/",
    "/carte",
    "/notre-histoire",
    "/contact",
    "/cgv",
    "/politique-confidentialite",
    "/politique-cookies",
  ];
  MENU_CATEGORIES.forEach((c) => paths.push(categoryPath(c.id)));
  return paths;
}

export function getSeoForRoute(route: AppRoute) {
  if (route.type === "legal") {
    const legal = LEGAL_SEO[route.legal];
    return {
      title: `${legal.title} | ${SITE.name}`,
      description: SEO.defaultDescription,
      path: legal.path,
      keywords: SEO.keywords,
      noindex: true,
    };
  }

  if (route.type === "category") {
    const cat = CATEGORY_SEO[route.categoryId];
    return {
      title: `${cat.title} | ${SITE.name}`,
      description: cat.description,
      path: categoryPath(route.categoryId),
      keywords: [...SEO.keywords, ...cat.keywords],
      noindex: false as const,
    };
  }

  const page = PAGE_SEO[route.page];
  return {
    title: page.title,
    description: page.description,
    path: page.path,
    keywords: [...SEO.keywords],
    noindex: false as const,
  };
}
