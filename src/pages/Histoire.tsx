import { motion } from "motion/react";
import { MEDIA } from "../assets/media";

const TIMELINE = [
  {
    year: "Les origines",
    title: "Un snack au cœur d'Aix",
    text: "Snack Du Lion s'installe à Aix-en-Provence avec une carte simple et généreuse : pizzas, sandwichs et tacos pour tous les appétits.",
  },
  {
    year: "Notre savoir-faire",
    title: "Des recettes maison",
    text: "Pizzas sur base crème fraîche, garnitures soignées et sauces préparées sur place — la qualité avant tout.",
  },
  {
    year: "Aujourd'hui",
    title: "Votre snack de quartier",
    text: "Sur place, à emporter ou en livraison : une équipe accueillante vous attend au 5 Rue Emile Henriot, ouvert dès 11h.",
  },
];

export function Histoire() {
  return (
    <section className="bg-brand-dark pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-14 max-w-2xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-accent">
            À propos
          </p>
          <h1 className="text-4xl font-black sm:text-5xl">
            Notre <span className="text-brand-primary">histoire</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/55 sm:text-lg">
            Restauration rapide à Aix-en-Provence — le Snack Du Lion, c'est l'adresse locale pour
            une pause déjeuner ou un dîner sans prise de tête.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video overflow-hidden rounded-3xl border border-brand-primary/20 bg-brand-dark-accent"
          >
            <img
              src={MEDIA.lion}
              alt="Snack Du Lion — notre équipe et notre snack à Aix-en-Provence"
              className="h-full w-full object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent"
              aria-hidden
            />
          </motion.div>

          <ol className="space-y-8">
            {TIMELINE.map((item, i) => (
              <motion.li
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative border-l-2 border-brand-primary/40 pl-8"
              >
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-brand-primary" />
                <p className="text-sm font-bold uppercase tracking-widest text-brand-accent">
                  {item.year}
                </p>
                <h2 className="mt-1 text-xl font-bold">{item.title}</h2>
                <p className="mt-2 text-base leading-relaxed text-white/55">{item.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <blockquote className="mt-16 rounded-3xl border border-brand-primary/30 bg-brand-primary/10 p-8 text-center sm:p-12">
          <p className="text-2xl font-black text-brand-primary sm:text-3xl">
            « Le snack du lion, à Aix ! »
          </p>
          <p className="mt-3 text-sm text-white/50">— Snack Du Lion, 5 Rue Emile Henriot</p>
        </blockquote>
      </div>
    </section>
  );
}
