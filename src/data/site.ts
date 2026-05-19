/** Snack Du Lion — Aix-en-Provence */
export const SITE = {
  name: "Snack Du Lion",
  shortName: "Du Lion",
  tagline: "Pizzas, burgers & spécialités tunisiennes",
  phone: "+33442523001",
  phoneDisplay: "04 42 52 30 01",
  email: "contact@snackdulion.fr",
  rating: 4.2,
  reviewCount: 112,
  address: {
    line1: "5 Rue Emile Henriot",
    line2: "13090 Aix-en-Provence",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=5+Rue+Emile+Henriot,+13090+Aix-en-Provence&hl=fr&z=16&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=5+Rue+Emile+Henriot,+13090+Aix-en-Provence",
  orderUrl: "https://deliveroo.fr/fr/menu/aix-en-provence/aix-giono/snack-du-lion",
  uberEatsUrl:
    "https://www.ubereats.com/fr/store/la-table-a-pizza-du-lion/wqIVxLdwQVmV9LPOcP6NAQ",
  social: {
    facebook: "https://www.facebook.com/snack.du.lion/",
    tripadvisor: "https://www.tripadvisor.fr/",
  },
  hours: [
    { days: "Ouverture", hours: "7j/7 · 10h00 – 23h00" },
    { days: "Livraison", hours: "19h00 – 22h00" },
  ],
} as const;

export type PageId = "accueil" | "carte" | "histoire" | "contact";

export const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: "accueil", label: "Accueil" },
  { id: "carte", label: "La Carte" },
  { id: "histoire", label: "Notre Histoire" },
  { id: "contact", label: "Contact" },
];
