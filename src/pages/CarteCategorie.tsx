import { ArrowLeft } from "lucide-react";
import { MediaCover } from "../components/MediaCover";
import { PizzaMenuList } from "../components/PizzaMenuList";
import { ProductRow } from "../components/ProductRow";
import {
  getCategoryById,
  getProductsByCategory,
  isPizzaCategory,
  PIZZA_CREME,
  PIZZA_TOMATE,
  type CategoryId,
} from "../data/menu";
import { SITE } from "../data/site";

type Props = {
  categoryId: CategoryId;
  onBack: () => void;
};

export function CarteCategorie({ categoryId, onBack }: Props) {
  const category = getCategoryById(categoryId);
  const products = getProductsByCategory(categoryId);
  const isPizza = isPizzaCategory(categoryId);
  const itemCount = isPizza
    ? PIZZA_TOMATE.length + PIZZA_CREME.length
    : products.length;

  if (!category) return null;

  return (
    <section className="bg-brand-dark-accent pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <button
          type="button"
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white/60 transition hover:text-brand-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à la carte
        </button>

        <header className="mb-10 overflow-hidden rounded-2xl border border-white/10">
          <MediaCover
            src={category.image}
            alt={category.name}
            overlay="medium"
            className="aspect-[21/9] min-h-[160px] sm:aspect-[3/1] flex items-center justify-center"
            imgClassName="h-full w-full object-cover object-center"
          >
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                {category.desc}
              </p>
              <h1 className="mt-1 text-3xl font-black sm:text-4xl">{category.name}</h1>
              <p className="mt-2 text-sm text-white/60">
                {itemCount} référence{itemCount > 1 ? "s" : ""}
                {isPizza && " · Tailles 35 cm & 40 cm"}
              </p>
            </div>
          </MediaCover>
        </header>

        {isPizza ? (
          <PizzaMenuList />
        ) : (
          <ul className="overflow-hidden rounded-2xl border border-white/10 bg-brand-dark">
            {products.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </ul>
        )}

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-brand-primary px-10 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-primary/25 transition hover:opacity-90"
          >
            Commander sur Deliveroo
          </a>
          <button
            type="button"
            onClick={onBack}
            className="rounded-2xl border border-white/15 px-10 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-brand-primary"
          >
            Autres catégories
          </button>
        </div>
      </div>
    </section>
  );
}
