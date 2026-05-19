import type { FC } from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import type { MenuCategory } from "../data/menu";
import { getCategoryItemCount } from "../data/menu";

export const CategoryCard: FC<{
  category: MenuCategory;
  index: number;
  onOpen: () => void;
}> = ({ category, index, onOpen }) => {
  const count = getCategoryItemCount(category.id);

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="group relative aspect-[3/4] min-h-[300px] w-full overflow-hidden rounded-3xl border border-white/10 text-left shadow-lg transition duration-500 hover:-translate-y-2 hover:border-brand-primary/60 hover:shadow-2xl hover:shadow-brand-primary/20"
    >
      {/* Image pleine carte */}
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
      />

      {/* Voile + dégradé bas */}
      <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />

      {/* Lueur verte au survol */}
      <div className="absolute inset-0 bg-brand-primary/0 transition duration-500 group-hover:bg-brand-primary/15" />

      {/* Reflet décoratif */}
      <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition duration-700 group-hover:left-full group-hover:opacity-100" />

      {/* Contenu */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">
          {category.desc}
        </p>
        <h2 className="mt-1 text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
          {category.name}
        </h2>
        <p className="mt-2 text-sm text-white/65">
          {count} produits · Voir le détail
        </p>
      </div>

      {/* Bouton flèche */}
      <span className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary text-white shadow-lg shadow-brand-primary/40 transition duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-brand-primary">
        <ChevronRight className="h-5 w-5" />
      </span>
    </motion.button>
  );
};
