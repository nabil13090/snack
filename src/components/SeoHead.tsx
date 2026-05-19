import { useEffect } from "react";
import { getSeoForRoute, SEO, SITE_URL, type AppRoute } from "../data/seo";

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

type Props = {
  route: AppRoute;
};

export function SeoHead({ route }: Props) {
  useEffect(() => {
    const meta = getSeoForRoute(route);
    const url = `${SITE_URL}${meta.path === "/" ? "" : meta.path}`;
    const image = `${SITE_URL}/logo.png`;

    document.title = meta.title;
    document.documentElement.lang = "fr";

    setMeta("description", meta.description);
    setMeta("keywords", meta.keywords.join(", "));
    setMeta("robots", meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
    setMeta("author", "Snack Du Lion");
    setMeta("geo.region", SEO.geo.region);
    setMeta("geo.placename", SEO.geo.placename);
    setMeta("geo.position", SEO.geo.position);
    setMeta("ICBM", SEO.geo.position.replace(";", ", "));

    setLink("canonical", url);

    setMeta("og:type", "website", true);
    setMeta("og:locale", SEO.locale, true);
    setMeta("og:site_name", "Snack Du Lion", true);
    setMeta("og:title", meta.title, true);
    setMeta("og:description", meta.description, true);
    setMeta("og:url", url, true);
    setMeta("og:image", image, true);
    setMeta("og:image:alt", "Snack Du Lion — Fast-food Aix-en-Provence", true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setMeta("twitter:image", image);
  }, [route]);

  return null;
}
