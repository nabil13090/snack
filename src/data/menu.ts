import { MEDIA } from "../assets/media";

export type CategoryId =
  | "pizzas"
  | "sandwichs"
  | "tacos"
  | "burgers"
  | "specialites-tunisiennes"
  | "formules-boissons";

export type PizzaItem = {
  id: string;
  name: string;
  description: string;
  price35: number;
  price40: number;
};

export type MenuProduct = {
  id: string;
  categoryId: CategoryId;
  name: string;
  description: string;
  image?: string;
  price?: number;
  priceMenu?: number;
};

export type MenuCategory = {
  id: CategoryId;
  name: string;
  desc: string;
  image: string;
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "pizzas",
    name: "Pizzas",
    desc: "Base tomate & crème fraîche",
    image: MEDIA.sections.pizzas,
  },
  {
    id: "specialites-tunisiennes",
    name: "Spécialités tunisiennes",
    desc: "Chapati, makloub & plus",
    image: MEDIA.sections["specialites-tunisiennes"],
  },
  {
    id: "sandwichs",
    name: "Sandwichs",
    desc: "Pain frais, assiettes & sauces",
    image: MEDIA.sections.sandwichs,
  },
  {
    id: "burgers",
    name: "Burgers",
    desc: "Menus +2 €",
    image: MEDIA.sections.burgers,
  },
  {
    id: "tacos",
    name: "Tacos",
    desc: "Viandes & sauces au choix",
    image: MEDIA.sections.tacos,
  },
  {
    id: "formules-boissons",
    name: "Assiettes, boissons & desserts",
    desc: "Accompagnements & douceurs",
    image: MEDIA.sections["formules-boissons"],
  },
];

export const PIZZA_TOMATE: PizzaItem[] = [
  { id: "pt-fromage", name: "Fromage", description: "emmental, olives", price35: 6, price40: 8 },
  { id: "pt-anchois", name: "Anchois", description: "anchois, olives", price35: 6, price40: 8 },
  { id: "pt-margarita", name: "Margarita", description: "mozza, basilic frais, olives", price35: 6.5, price40: 8.5 },
  { id: "pt-napolitaine", name: "Napolitaine", description: "emmental, anchois, olive", price35: 7, price40: 9 },
  { id: "pt-neptune", name: "Neptune", description: "emmental, thon, olive", price35: 7, price40: 9 },
  { id: "pt-jambon", name: "Jambon", description: "emmental, jambon, olive", price35: 7, price40: 9 },
  { id: "pt-merguez", name: "Merguez", description: "emmental, merguez, olive", price35: 7, price40: 9 },
  { id: "pt-oriental", name: "Oriental", description: "viande hachée, poivrons, merguez, olive", price35: 7, price40: 9 },
  { id: "pt-bolognaise", name: "Bolognaise", description: "emmental, viande hachée, olive", price35: 7, price40: 9 },
  { id: "pt-royal", name: "Royal", description: "emmental, champignons, jambon, olive", price35: 7, price40: 9 },
  { id: "pt-vegetarienne", name: "Végétarienne", description: "emmental, champignons, poivrons, oignons, olive", price35: 8, price40: 11 },
  { id: "pt-4fromages", name: "4 Fromages", description: "emmental, roquefort, chèvre, mozza, olive", price35: 8, price40: 11 },
  { id: "pt-provencal", name: "Provençale", description: "emmental, champignons, tomates fraîches, poivrons, mozza, olive", price35: 8, price40: 11 },
  { id: "pt-espagnole", name: "Espagnole", description: "emmental, oignons, poivrons, chorizo, olive", price35: 8, price40: 11 },
  { id: "pt-armenienne", name: "Arménienne", description: "emmental, oignons, poivrons, viande hachée, olive", price35: 8, price40: 11 },
];

export const PIZZA_CREME: PizzaItem[] = [
  { id: "pc-fromage", name: "Fromage", description: "emmental", price35: 7.5, price40: 9 },
  { id: "pc-pacific", name: "Pacific", description: "thon, emmental", price35: 7.5, price40: 9 },
  { id: "pc-chevre-miel", name: "Chèvre miel", description: "chèvre, miel, emmental", price35: 8, price40: 10 },
  { id: "pc-baltique", name: "Baltique", description: "emmental, saumon", price35: 8, price40: 10 },
  { id: "pc-reine", name: "Reine", description: "emmental, jambon, champignons, œuf", price35: 9, price40: 12 },
  { id: "pc-sicilienne", name: "Sicilienne", description: "emmental, jambon, chèvre", price35: 9, price40: 12 },
  { id: "pc-kebab", name: "Kebab", description: "emmental, kebab, oignons, tomates fraîches", price35: 9, price40: 12 },
  { id: "pc-douce", name: "Douce", description: "poulet, chèvre miel, emmental", price35: 9, price40: 12 },
  { id: "pc-algerienne", name: "Algérienne", description: "emmental, poulet, pomme de terre, sauce algérienne", price35: 9, price40: 12 },
  { id: "pc-oceane", name: "Océanne", description: "emmental, pomme de terre, thon", price35: 9, price40: 12 },
  { id: "pc-gourmande", name: "Gourmande", description: "emmental, pomme de terre, thon", price35: 9, price40: 12 },
  { id: "pc-mimini", name: "Mimini", description: "emmental, poulet, champignons, œuf", price35: 9, price40: 12 },
  { id: "pc-taranta", name: "Taranta", description: "emmental, poulet, pomme de terre, reblochon", price35: 9, price40: 12 },
  { id: "pc-savoyarde", name: "Savoyarde", description: "emmental, lardons, pomme de terre, oignons, reblochon", price35: 9, price40: 12 },
  { id: "pc-raclette", name: "Raclette", description: "emmental, jambon, raclette, pomme de terre", price35: 9, price40: 12 },
];

export const MENU_PRODUCTS: MenuProduct[] = [
  // Spécialités tunisiennes
  {
    id: "tn-chapati-thon",
    categoryId: "specialites-tunisiennes",
    name: "Chapati thon",
    description: "Thon, omelette, salade composée",
    image: MEDIA.products.chapatiOeuf,
    price: 6,
    priceMenu: 7.5,
  },
  {
    id: "tn-chapati-viandes",
    categoryId: "specialites-tunisiennes",
    name: "Chapati viandes",
    description: "Viandes au choix",
    image: MEDIA.products.chapati,
    price: 7,
    priceMenu: 9,
  },
  {
    id: "tn-baguette",
    categoryId: "specialites-tunisiennes",
    name: "Baguette farcie",
    description: "Salade, fromage, charcuterie",
    image: MEDIA.products.baguetteFarcie,
    price: 7,
    priceMenu: 9,
  },
  {
    id: "tn-makloub",
    categoryId: "specialites-tunisiennes",
    name: "Makloub",
    description: "Salade, fromage, charcuterie",
    image: MEDIA.products.makloub,
    price: 7,
    priceMenu: 9,
  },

  // Sandwichs — salade, tomate, sauce au choix. Menu : frites + boisson 33 cl
  {
    id: "sw-steak",
    categoryId: "sandwichs",
    name: "Steak",
    description: "Steak 80 g, salade, tomate, sauce au choix",
    image: MEDIA.products.merguez,
    price: 6,
    priceMenu: 7.5,
  },
  {
    id: "sw-merguez",
    categoryId: "sandwichs",
    name: "Merguez",
    description: "Merguez, salade, tomate, sauce au choix",
    image: MEDIA.products.merguez,
    price: 6,
    priceMenu: 7.5,
  },
  {
    id: "sw-chiche",
    categoryId: "sandwichs",
    name: "Chiche",
    description: "Viande hachée épicée, salade, tomate, sauce au choix",
    image: MEDIA.products.chiche,
    price: 6,
    priceMenu: 7.5,
  },
  {
    id: "sw-escalope",
    categoryId: "sandwichs",
    name: "Escalope",
    description: "Escalope de poulet, salade, tomate, sauce au choix",
    image: MEDIA.products.escalope,
    price: 6,
    priceMenu: 7.5,
  },
  {
    id: "sw-americano",
    categoryId: "sandwichs",
    name: "Americano",
    description: "Steak 80 g, emmental, salade, tomate, sauce au choix",
    image: MEDIA.products.americainSandwich,
    price: 6,
    priceMenu: 7.5,
  },
  {
    id: "sw-kebab",
    categoryId: "sandwichs",
    name: "Kebab",
    description: "Kebab, salade, tomate, sauce au choix",
    image: MEDIA.products.kebab,
    price: 6,
    priceMenu: 7.5,
  },
  {
    id: "sw-brochettes",
    categoryId: "sandwichs",
    name: "Brochettes",
    description: "Curry ou Boursin — salade, tomate, sauce au choix",
    image: MEDIA.products.curryBoursin,
    price: 6,
    priceMenu: 7.5,
  },
  {
    id: "sw-assiette-1",
    categoryId: "sandwichs",
    name: "Assiette 1 viande",
    description: "Viande au choix, frites, salade",
    image: MEDIA.products.assiette,
    price: 9,
  },
  {
    id: "sw-assiette-2",
    categoryId: "sandwichs",
    name: "Assiette 2 viandes",
    description: "2 viandes au choix, frites, salade",
    image: MEDIA.products.assiette,
    price: 11,
  },

  // Burgers — menu +2 €
  {
    id: "bg-cheese",
    categoryId: "burgers",
    name: "Cheese",
    description: "Salade, tomate, steak 80 g, double cheddar, mayo",
    image: MEDIA.products.cheese,
    price: 4.5,
    priceMenu: 6.5,
  },
  {
    id: "bg-double-cheese",
    categoryId: "burgers",
    name: "Double cheese",
    description: "Salade, tomate, 2 steaks 80 g, double cheddar, mayo",
    image: MEDIA.products.doubleCheese,
    price: 6.5,
    priceMenu: 8.5,
  },
  {
    id: "bg-chicken",
    categoryId: "burgers",
    name: "Chicken",
    description: "Salade, tomate, poulet pané, double cheddar, sauce tartare",
    image: MEDIA.products.chicken,
    price: 6.5,
    priceMenu: 8.5,
  },
  {
    id: "bg-americain",
    categoryId: "burgers",
    name: "Americain",
    description: "Salade, tomate, steak 80 g, double cheddar, sauce barbecue",
    image: MEDIA.products.americain,
    price: 6.5,
    priceMenu: 8.5,
  },
  {
    id: "bg-fish",
    categoryId: "burgers",
    name: "Fish",
    description: "Salade, tomate, poisson, sauce tartare",
    image: MEDIA.products.fish,
    price: 6.5,
    priceMenu: 8.5,
  },

  // Tacos — menu +2 € (frites + boisson 33 cl)
  {
    id: "tx-1-viande",
    categoryId: "tacos",
    name: "Tacos 1 viande",
    description: "Viande au choix, frites, fromage, sauce au choix",
    image: MEDIA.products.tacos,
    price: 6,
    priceMenu: 8,
  },
  {
    id: "tx-2-viandes",
    categoryId: "tacos",
    name: "Tacos 2 viandes",
    description: "2 viandes au choix, frites, fromage, sauce au choix",
    image: MEDIA.products.tacos,
    price: 7,
    priceMenu: 9,
  },
  {
    id: "tx-3-viandes",
    categoryId: "tacos",
    name: "Tacos 3 viandes",
    description: "3 viandes au choix, frites, fromage, sauce au choix",
    image: MEDIA.products.tacos,
    price: 8,
    priceMenu: 10,
  },

  // Poulet frit, boissons, desserts
  {
    id: "fb-poulet-x3",
    categoryId: "formules-boissons",
    name: "Tenders / Wings / Nuggets ×3",
    description: "Poulet frit croustillant",
    image: MEDIA.products.apetizer,
    price: 4,
  },
  {
    id: "fb-poulet-x6",
    categoryId: "formules-boissons",
    name: "Tenders / Wings / Nuggets ×6",
    description: "Poulet frit croustillant",
    image: MEDIA.products.apetizer,
    price: 7,
  },
  {
    id: "fb-poulet-x12",
    categoryId: "formules-boissons",
    name: "Tenders / Wings / Nuggets ×12",
    description: "Poulet frit croustillant",
    image: MEDIA.products.apetizer,
    price: 10,
  },
  {
    id: "fb-boisson-33",
    categoryId: "formules-boissons",
    name: "Boisson 33 cl",
    description: "Coca, Fanta, Oasis…",
    image: MEDIA.products.boisson33,
    price: 2,
  },
  {
    id: "fb-boisson-50",
    categoryId: "formules-boissons",
    name: "Boisson 50 cl",
    description: "Coca, Fanta, Oasis…",
    image: MEDIA.products.boisson50,
    price: 2.5,
  },
  {
    id: "fb-boisson-15",
    categoryId: "formules-boissons",
    name: "Boisson 1,5 L",
    description: "Format familial",
    image: MEDIA.products.boisson15,
    price: 3,
  },
  {
    id: "fb-eau",
    categoryId: "formules-boissons",
    name: "Eau 1,5 L",
    description: "Eau plate",
    image: MEDIA.products.eau,
    price: 2,
  },
  {
    id: "fb-tiramisu",
    categoryId: "formules-boissons",
    name: "Tiramisu",
    description: "Dessert maison",
    image: MEDIA.products.tiramisu,
    price: 2.5,
  },
  {
    id: "fb-tarte-daim",
    categoryId: "formules-boissons",
    name: "Tarte au Daim",
    description: "Dessert gourmand",
    image: MEDIA.products.tarteDaim,
    price: 2.5,
  },
];

export function formatPrice(price: number): string {
  const fixed = price % 1 === 0 ? price.toFixed(0) : price.toFixed(2).replace(".", ",");
  return `${fixed} €`;
}

export function getCategoryById(id: CategoryId): MenuCategory | undefined {
  return MENU_CATEGORIES.find((c) => c.id === id);
}

export function getProductsByCategory(id: CategoryId): MenuProduct[] {
  return MENU_PRODUCTS.filter((p) => p.categoryId === id);
}

export function isPizzaCategory(id: CategoryId): boolean {
  return id === "pizzas";
}

export function getCategoryItemCount(id: CategoryId): number {
  if (isPizzaCategory(id)) return PIZZA_TOMATE.length + PIZZA_CREME.length;
  return getProductsByCategory(id).length;
}
