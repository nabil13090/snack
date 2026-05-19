import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { formatPrice, MENU_PRODUCTS } from "../data/menu";
import type { CategoryId } from "../data/menu";

const SANDWICH_IDS = [
  "sw-kebab",
  "sw-merguez",
  "sw-escalope",
  "sw-americano",
  "sw-chiche",
] as const;

const sandwiches = SANDWICH_IDS.map((id) => MENU_PRODUCTS.find((p) => p.id === id)).filter(
  (p): p is NonNullable<typeof p> => Boolean(p),
);

type Props = {
  onOpenCategory: (id: CategoryId) => void;
};

export function FeaturedShowcase({ onOpenCategory }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ef] pt-6 pb-10 sm:pt-8 sm:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center sm:mb-5"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary">
            Nos best-sellers
          </p>
          <h2 className="mt-1 font-display text-4xl font-black uppercase text-neutral-900 sm:text-5xl">
            Sandwichs maison
          </h2>
          <p className="mx-auto mt-1.5 max-w-md text-sm text-neutral-500 sm:text-base">
            Pain frais, viandes grillées, sauces au choix — menu frites + boisson 33 cl
          </p>
        </motion.div>

        <ul className="-mx-4 flex gap-8 overflow-x-auto px-4 pb-6 snap-x snap-mandatory scrollbar-none sm:mx-0 sm:grid sm:grid-cols-5 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0">
          {sandwiches.map((product, i) => (
            <motion.li
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group flex w-[min(82vw,300px)] shrink-0 snap-center flex-col items-center sm:w-auto"
            >
              <button
                type="button"
                onClick={() => onOpenCategory("sandwichs")}
                className="flex w-full flex-col items-center"
              >
                <div className="relative flex w-full items-center justify-center">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[min(48vw,240px)] w-auto max-w-none object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.2)] transition duration-300 group-hover:scale-[1.06] group-hover:-translate-y-2 sm:h-[200px] lg:h-[260px]"
                    />
                  )}
                </div>

                <h3 className="mt-2 text-center text-base font-black uppercase tracking-wide text-neutral-900 sm:text-lg">
                  {product.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-center text-sm text-neutral-500">
                  {product.description}
                </p>
                <p className="mt-2 text-center">
                  {product.price != null && (
                    <span className="text-xl font-bold text-brand-primary sm:text-2xl">
                      {formatPrice(product.price)}
                    </span>
                  )}
                  {product.priceMenu != null && (
                    <span className="ml-2 text-sm font-semibold text-neutral-400 sm:text-base">
                      · Menu {formatPrice(product.priceMenu)}
                    </span>
                  )}
                </p>
              </button>
            </motion.li>
          ))}
        </ul>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => onOpenCategory("sandwichs")}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-primary transition hover:gap-3 sm:text-base"
          >
            Tous nos sandwichs
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
