import type { FC, ReactNode } from "react";
import { Bike, Phone } from "lucide-react";
import { MEDIA } from "../assets/media";
import { SITE } from "../data/site";

type PartnerCardProps = {
  title: string;
  caption: string;
  href?: string;
  children: ReactNode;
};

const PartnerCard: FC<PartnerCardProps> = ({ title, caption, href, children }) => {
  const body = (
    <article className="flex w-[148px] flex-col items-center gap-4 sm:w-[160px]">
      <div className="flex h-[92px] w-[92px] items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/20 ring-1 ring-white/20 sm:h-[100px] sm:w-[100px]">
        {children}
      </div>
      <div className="space-y-1 text-center">
        <p className="text-sm font-semibold leading-tight text-white">{title}</p>
        <p className="text-xs leading-snug text-white/50">{caption}</p>
      </div>
    </article>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("tel:") ? undefined : "_blank"}
        rel={href.startsWith("tel:") ? undefined : "noopener noreferrer"}
        className="transition-transform hover:-translate-y-0.5"
      >
        {body}
      </a>
    );
  }

  return body;
};

export function PartnersBar() {
  return (
    <section
      className="border-t border-brand-primary/20 bg-brand-dark-accent py-12 sm:py-14"
      aria-label="Livraison et paiement"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Livraison */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
              Livraison
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              Commandez en livraison <strong className="font-semibold text-white">directement au snack</strong>{" "}
              par téléphone — sans passer par une application. Également disponible sur Deliveroo et Uber
              Eats.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-8 sm:justify-start sm:gap-10">
              <PartnerCard
                title="Livraison directe"
                caption="Appelez-nous, livraison maison"
                href={`tel:${SITE.phone}`}
              >
                <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-brand-primary px-3">
                  <Phone className="h-9 w-9 text-white" />
                  <span className="text-[10px] font-bold uppercase tracking-wide text-white/90">
                    {SITE.phoneDisplay}
                  </span>
                </div>
              </PartnerCard>

              <PartnerCard
                title="Deliveroo"
                caption="Commander sur l'app"
                href={SITE.orderUrl}
              >
                <img
                  src={MEDIA.partners.deliveroo}
                  alt="Deliveroo"
                  className="h-full w-full object-cover"
                />
              </PartnerCard>

              <PartnerCard
                title="Uber Eats"
                caption="Disponible sur Uber Eats"
                href={SITE.uberEatsUrl}
              >
                <img
                  src={MEDIA.partners.uber}
                  alt="Uber Eats"
                  className="h-full w-full object-cover"
                />
              </PartnerCard>
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-xs text-white/40 sm:justify-start">
              <Bike className="h-4 w-4 shrink-0 text-brand-primary" />
              Livraison 19h00 – 22h00 · Zone Aix-en-Provence
            </p>
          </div>

          {/* Paiement */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
              Paiement
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              Sur place ou à emporter, nous acceptons les cartes bancaires et les titres restaurant.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-8 sm:justify-start sm:gap-10">
              <PartnerCard title="Carte bancaire" caption="CB, Visa, Mastercard">
                <img
                  src={MEDIA.partners.cb}
                  alt="CB, Visa, Mastercard"
                  className="h-[70%] w-[85%] object-contain"
                />
              </PartnerCard>

              <PartnerCard title="Tickets restaurant" caption="Titres restaurant acceptés">
                <img
                  src={MEDIA.partners.ticketResto}
                  alt="Tickets restaurant"
                  className="h-[75%] w-[80%] object-contain"
                />
              </PartnerCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
