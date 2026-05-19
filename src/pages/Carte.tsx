import { CategoryCard } from "../components/CategoryCard";
import { MENU_CATEGORIES, type CategoryId } from "../data/menu";
import { SITE } from "../data/site";

type Props = {
  onOpenCategory: (id: CategoryId) => void;
};

export function Carte({ onOpenCategory }: Props) {
  return (
    <section className="bg-brand-dark-accent pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-14 max-w-2xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-accent">
            Menu
          </p>
          <h1 className="text-4xl font-black sm:text-5xl">
            La <span className="text-brand-primary">carte</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/55 sm:text-lg">
            Choisissez une catégorie pour découvrir nos produits, leurs détails et leurs prix.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MENU_CATEGORIES.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              index={i}
              onOpen={() => onOpenCategory(cat.id)}
            />
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-brand-primary px-10 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-primary/25 transition hover:opacity-90"
          >
            Commander sur Deliveroo
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="rounded-2xl border border-white/15 px-10 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-brand-accent hover:text-brand-accent"
          >
            Appeler pour commander
          </a>
        </div>
      </div>
    </section>
  );
}
