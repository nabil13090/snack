import { MENU_CATEGORIES } from "../data/menu";
import { SITE_URL, categoryPath } from "../data/seo";
import { SITE } from "../data/site";

const openingHours = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "10:00", closes: "23:00" },
];

export function StructuredData() {
  const restaurant = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: SITE.name,
    description:
      "Fast-food à Aix-en-Provence : pizzas, tacos, burgers, sandwichs et spécialités tunisiennes. Sur place, à emporter et livraison.",
    url: SITE_URL,
    telephone: SITE.phone,
    email: SITE.email,
    image: [`${SITE_URL}/lion.webp`, `${SITE_URL}/logo.png`],
    logo: `${SITE_URL}/logo.png`,
    priceRange: "€",
    servesCuisine: ["Fast Food", "Pizza", "Tacos", "Burger", "Cuisine tunisienne", "Sandwich"],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line1,
      addressLocality: "Aix-en-Provence",
      postalCode: "13090",
      addressRegion: "Provence-Alpes-Côte d'Azur",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.5263,
      longitude: 5.4454,
    },
    openingHoursSpecification: openingHours,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
    },
    sameAs: [SITE.social.facebook, SITE.orderUrl, SITE.uberEatsUrl],
    hasMenu: {
      "@type": "Menu",
      name: "Carte Snack Du Lion",
      hasMenuSection: MENU_CATEGORIES.map((cat) => ({
        "@type": "MenuSection",
        name: cat.name,
        description: cat.desc,
        url: `${SITE_URL}${categoryPath(cat.id)}`,
      })),
    },
    potentialAction: [
      {
        "@type": "OrderAction",
        target: SITE.orderUrl,
        name: "Commander sur Deliveroo",
      },
      {
        "@type": "ReserveAction",
        target: { "@type": "EntryPoint", urlTemplate: `tel:${SITE.phone}` },
        name: "Appeler pour commander",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    description: "Snack, pizzas et tacos à Aix-en-Provence",
    inLanguage: "fr-FR",
    publisher: { "@id": `${SITE_URL}/#restaurant` },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    image: `${SITE_URL}/logo.png`,
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: SITE.phone,
    address: restaurant.address,
    geo: restaurant.geo,
    openingHoursSpecification: openingHours,
    areaServed: {
      "@type": "City",
      name: "Aix-en-Provence",
    },
  };

  const breadcrumbHome = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "La carte",
        item: `${SITE_URL}/carte`,
      },
    ],
  };

  const graphs = [restaurant, website, localBusiness, breadcrumbHome];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphs) }}
    />
  );
}
