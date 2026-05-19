import type { FC } from "react";
import { PIZZA_CREME, PIZZA_TOMATE, formatPrice, type PizzaItem } from "../data/menu";

const PizzaRow: FC<{ item: PizzaItem }> = ({ item }) => {
  return (
    <li className="group border-b border-white/5 px-4 py-4 transition hover:border-brand-primary/30 hover:bg-white/[0.04] sm:px-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div className="min-w-0 flex-1">
          <h3 className="font-bold uppercase tracking-wide text-white group-hover:text-brand-accent">
            {item.name}
          </h3>
          <p className="mt-0.5 text-sm italic text-white/45">{item.description}</p>
        </div>
        <div className="flex shrink-0 gap-4 text-sm font-bold sm:gap-6">
          <span className="text-white/70">
            <span className="text-xs font-normal uppercase text-white/40">35 cm</span>{" "}
            {formatPrice(item.price35)}
          </span>
          <span className="text-brand-primary">
            <span className="text-xs font-normal uppercase text-white/40">40 cm</span>{" "}
            {formatPrice(item.price40)}
          </span>
        </div>
      </div>
    </li>
  );
};

const PizzaSection: FC<{ title: string; items: PizzaItem[] }> = ({ title, items }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-brand-dark">
      <h2 className="border-b border-brand-primary/30 bg-brand-primary/10 px-4 py-3 text-sm font-bold uppercase tracking-widest text-brand-accent sm:px-6">
        {title}
      </h2>
      <ul>
        {items.map((item) => (
          <PizzaRow key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export function PizzaMenuList() {
  return (
    <div className="space-y-8">
      <PizzaSection title="Pizzas — Base tomate" items={PIZZA_TOMATE} />
      <PizzaSection title="Pizzas — Base crème fraîche" items={PIZZA_CREME} />
      <p className="text-center text-xs text-white/40">
        Ouvert 7j/7 · 10h00 – 23h00 · Livraison 19h00 – 22h00
      </p>
    </div>
  );
}
