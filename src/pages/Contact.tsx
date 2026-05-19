import { motion } from "motion/react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "../data/site";

export function Contact() {
  return (
    <section className="bg-brand-dark pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-14 max-w-2xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-secondary">
            Infos pratiques
          </p>
          <h1 className="text-4xl font-black sm:text-5xl">
            Nous <span className="text-brand-primary">trouver</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/55 sm:text-lg">
            Adresse, horaires, plan et contact — tout pour venir nous voir ou commander.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex gap-5 rounded-2xl border border-white/10 bg-brand-dark-accent p-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-primary">
                <MapPin className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Adresse</h2>
                <p className="mt-1 leading-relaxed text-white/55">
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-2xl border border-white/10 bg-brand-dark-accent p-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-primary">
                <Phone className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Téléphone</h2>
                <a
                  href={`tel:${SITE.phone}`}
                  className="mt-1 inline-block text-lg font-semibold text-brand-secondary transition hover:text-white"
                >
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex gap-5 rounded-2xl border border-white/10 bg-brand-dark-accent p-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-primary">
                <Mail className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Email</h2>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-1 inline-block text-white/55 transition hover:text-brand-primary"
                >
                  {SITE.email}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-brand-dark-accent p-6">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-brand-primary" />
                <h2 className="text-lg font-bold">Horaires</h2>
              </div>
              <ul className="space-y-3">
                {SITE.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex justify-between gap-4 border-b border-white/5 pb-3 text-sm last:border-0 last:pb-0"
                  >
                    <span className="text-white/50">{h.days}</span>
                    <span className="font-semibold">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-brand-primary px-8 py-4 text-sm font-bold uppercase text-white shadow-lg shadow-brand-primary/25"
              >
                <Phone className="h-4 w-4" />
                Appeler
              </a>
              <a
                href={SITE.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-8 py-4 text-sm font-bold uppercase text-white transition hover:border-brand-secondary hover:text-brand-secondary"
              >
                <MapPin className="h-4 w-4" />
                Itinéraire
              </a>
            </div>
          </div>

          {/* Plan Google Maps */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
          >
            <iframe
              title="Plan Snack Du Lion"
              src={SITE.mapsEmbed}
              className="h-[420px] w-full min-h-[320px] grayscale-[30%] contrast-[1.1] lg:h-full lg:min-h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
