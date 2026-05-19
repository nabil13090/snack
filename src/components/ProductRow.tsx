import type { FC } from "react";
import { formatPrice, type MenuProduct } from "../data/menu";

export const ProductRow: FC<{ product: MenuProduct }> = ({ product }) => {
  const hasMenu = product.priceMenu != null && product.price != null;

  return (
    <li className="group flex gap-4 border-b border-white/5 p-4 transition hover:bg-white/[0.05] sm:gap-6 sm:p-5">
      {product.image && (
        <div className="relative flex h-24 w-32 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-2 sm:h-28 sm:w-36 sm:p-2.5">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain object-center transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col justify-center sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="min-w-0 flex-1 border-l-0 border-brand-primary pl-0 transition group-hover:border-l-2 group-hover:pl-4">
          <h3 className="font-bold leading-tight text-white group-hover:text-brand-accent">
            {product.name}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-white/50">{product.description}</p>
        </div>

        <div className="mt-3 flex shrink-0 items-center gap-3 sm:mt-0 sm:flex-col sm:items-end sm:gap-1">
          {hasMenu ? (
            <>
              <span className="rounded-lg bg-white/5 px-3 py-1 text-sm font-bold text-white">
                Seul {formatPrice(product.price!)}
              </span>
              <span className="rounded-lg bg-brand-primary px-3 py-1 text-sm font-bold text-white">
                Menu {formatPrice(product.priceMenu!)}
              </span>
            </>
          ) : (
            product.price != null && (
              <span className="rounded-lg bg-brand-primary px-4 py-1.5 text-base font-bold text-white">
                {formatPrice(product.price)}
              </span>
            )
          )}
        </div>
      </div>
    </li>
  );
};
