import { motion } from "motion/react";
import {
  Bike,
  ChevronRight,
  MapPin,
  Phone,
  ShoppingBag,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import { MEDIA } from "../assets/media";
import { SITE } from "../data/site";
import { FeaturedShowcase } from "../components/FeaturedShowcase";
import type { PageId } from "../data/site";
import type { CategoryId } from "../data/menu";

type Props = {
  onNavigate: (page: PageId) => void;
  onOpenCategory: (id: CategoryId) => void;
};

const MODES = [
  {
    id: "livraison",
    label: "Livraison",
    desc: "Se faire livrer chez vous",
    icon: Bike,
    color: "from-brand-primary to-emerald-800",
  },
  {
    id: "emporter",
    label: "À emporter",
    desc: "Prêt en quelques minutes",
    icon: ShoppingBag,
    color: "from-emerald-600 to-brand-primary",
  },
  {
    id: "surplace",
    label: "Sur place",
    desc: "5 Rue Emile Henriot, Aix",
    icon: UtensilsCrossed,
    color: "from-neutral-700 to-neutral-900",
  },
] as const;

export function Accueil({ onNavigate, onOpenCategory }: Props) {
  return (
    <div>
      {/* Bannière vidéo plein écran */}
      <section className="relative w-full overflow-hidden">
        <div className="relative min-h-[min(88vh,820px)] w-full">
          <video
            src={MEDIA.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden />
          <div
            className="absolute inset-0 bg-gradient-to-t from-brand-dark via-black/20 to-black/35"
            aria-hidden
          />

          <div className="relative z-10 flex min-h-[min(88vh,820px)] flex-col items-center justify-center px-4 pb-6 pt-28 text-center sm:px-6 sm:pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex max-w-2xl flex-col items-center"
            >
              <img
                src={MEDIA.logo}
                alt="Snack Du Lion"
                className="mb-5 h-20 w-20 rounded-full object-cover shadow-2xl ring-4 ring-white/20 sm:h-28 sm:w-28"
              />

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-accent sm:text-sm">
                Spécialité
              </p>

              <h1 className="mt-3 font-display text-5xl font-black uppercase leading-[0.95] text-white sm:text-7xl md:text-8xl">
                Snack Du Lion
              </h1>

              <p className="mt-5 max-w-2xl text-xl font-bold uppercase leading-snug tracking-wide text-white sm:text-3xl md:text-4xl">
                Sandwichs · Tacos · Spécialités tunisiennes · Burgers · Pizzas
              </p>

              <p className="mt-4 text-sm font-medium text-white/70 sm:text-base">
                Sur place · À emporter · Livraison
              </p>

              <a
                href={`tel:${SITE.phone}`}
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-brand-primary px-10 py-5 text-base font-black uppercase tracking-wide text-white shadow-2xl shadow-brand-primary/40 transition hover:scale-[1.02] hover:opacity-95 sm:px-14 sm:py-6 sm:text-lg"
              >
                <Phone className="h-6 w-6" />
                Appeler — {SITE.phoneDisplay}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturedShowcase onOpenCategory={onOpenCategory} />

      {/* Actions & infos sous la bannière */}
      <section className="bg-brand-dark py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5">
              <Star className="h-4 w-4 fill-brand-accent text-brand-accent" />
              <span className="text-sm font-semibold text-brand-secondary">
                {SITE.rating} · {SITE.reviewCount} avis Google
              </span>
            </div>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
              Pizzas, burgers, tacos, sandwichs et spécialités tunisiennes — au cœur d'Aix-en-Provence.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={SITE.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-brand-primary px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-primary/30 transition hover:opacity-90"
              >
                Commander
                <ChevronRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={() => onNavigate("carte")}
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/15 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white/80 transition hover:border-white hover:text-white"
              >
                Voir la carte
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-dark-accent py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-black sm:text-3xl">Comment commander ?</h2>
            <p className="mt-2 text-white/50">Livraison, à emporter ou sur place</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {MODES.map((mode, i) => (
              <motion.a
                key={mode.id}
                href={mode.id === "surplace" ? SITE.mapsDirections : SITE.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group flex flex-col items-center rounded-3xl bg-gradient-to-br ${mode.color} p-8 text-center transition hover:-translate-y-1 hover:shadow-xl`}
              >
                <mode.icon className="mb-4 h-10 w-10 text-white" />
                <h3 className="text-lg font-bold uppercase">{mode.label}</h3>
                <p className="mt-1 text-sm text-white/80">{mode.desc}</p>
              </motion.a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-3 text-sm font-bold uppercase text-white transition hover:opacity-90"
            >
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-bold uppercase text-white transition hover:border-brand-primary hover:text-brand-primary"
            >
              <MapPin className="h-4 w-4" />
              Plan & contact
            </button>
          </div>
        </div>
      </section>

      <section className="bg-brand-primary py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-4 text-center sm:justify-between sm:px-6 sm:text-left">
          {["Pizzas maison", "Sandwichs & tacos", "Ouvert dès 11h"].map((item) => (
            <span key={item} className="text-sm font-bold uppercase tracking-wide text-white">
              {item}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
