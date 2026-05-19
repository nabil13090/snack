import type { CategoryId } from "../data/menu";
import { categoryPath } from "../data/seo";
import type { AppRoute } from "../data/seo";
import type { LegalPageId } from "../pages/Legal";
import type { PageId } from "../data/site";

const LEGAL_PATHS: Record<string, LegalPageId> = {
  cgv: "cgv",
  "politique-confidentialite": "confidentialite",
  "politique-cookies": "cookies",
};

const PAGE_PATHS: Record<string, PageId> = {
  "": "accueil",
  carte: "carte",
  "notre-histoire": "histoire",
  contact: "contact",
};

const CATEGORY_IDS = new Set<string>([
  "pizzas",
  "sandwichs",
  "tacos",
  "burgers",
  "specialites-tunisiennes",
  "formules-boissons",
]);

export function parsePath(pathname: string): AppRoute {
  const path = pathname.replace(/\/+$/, "") || "/";
  const segments = path.split("/").filter(Boolean);

  if (segments.length === 0) {
    return { type: "page", page: "accueil" };
  }

  if (segments[0] === "carte") {
    const slug = segments[1];
    if (slug && CATEGORY_IDS.has(slug)) {
      return { type: "category", page: "carte", categoryId: slug as CategoryId };
    }
    return { type: "page", page: "carte" };
  }

  const legal = LEGAL_PATHS[segments[0]];
  if (legal) {
    return { type: "legal", legal };
  }

  const page = PAGE_PATHS[segments[0]];
  if (page) {
    return { type: "page", page };
  }

  return { type: "page", page: "accueil" };
}

export function buildPath(route: AppRoute): string {
  if (route.type === "legal") {
    const paths: Record<LegalPageId, string> = {
      cgv: "/cgv",
      confidentialite: "/politique-confidentialite",
      cookies: "/politique-cookies",
    };
    return paths[route.legal];
  }

  if (route.type === "category") {
    return categoryPath(route.categoryId);
  }

  const paths: Record<PageId, string> = {
    accueil: "/",
    carte: "/carte",
    histoire: "/notre-histoire",
    contact: "/contact",
  };
  return paths[route.page];
}

export function routeToPageId(route: AppRoute): PageId {
  if (route.type === "legal") return "accueil";
  if (route.type === "category") return "carte";
  return route.page;
}

export function routeCategoryId(route: AppRoute): CategoryId | null {
  return route.type === "category" ? route.categoryId : null;
}

export function routeLegalId(route: AppRoute): LegalPageId | null {
  return route.type === "legal" ? route.legal : null;
}
