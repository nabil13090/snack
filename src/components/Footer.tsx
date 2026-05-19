import type { FC, ReactNode } from "react";
import { Facebook, MapPin, Phone } from "lucide-react";
import { SITE, type PageId } from "../data/site";
import type { LegalPageId } from "../pages/Legal";
import { Logo } from "./Logo";

type Props = {
  onNavigate: (page: PageId) => void;
  onLegal: (page: LegalPageId) => void;
};

const NAV_LINKS = [
  { id: "accueil" as const, label: "Accueil" },
  { id: "carte" as const, label: "La Carte" },
  { id: "histoire" as const, label: "Notre Histoire" },
  { id: "contact" as const, label: "Contact" },
] as const;

const LEGAL_LINKS = [
  { id: "cgv" as const, label: "Conditions générales de vente" },
  { id: "confidentialite" as const, label: "Politique de confidentialité" },
  { id: "cookies" as const, label: "Politique cookies" },
] as const;

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">{children}</h3>
  );
}

const FooterLink: FC<{
  children: ReactNode;
  onClick: () => void;
}> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full text-left text-sm text-white/55 transition hover:text-brand-primary"
    >
      {children}
    </button>
  );
};

export function Footer({ onNavigate, onLegal }: Props) {
  return (
    <footer className="border-t border-white/10 bg-brand-dark">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-12">
          {/* Marque */}
          <div className="flex flex-col items-start text-left">
            <Logo size="sm" />
            <p className="mt-4 text-sm leading-relaxed text-white/50">{SITE.tagline}</p>
            <address className="mt-5 space-y-3 text-sm not-italic text-white/60">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                <span>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </span>
              </p>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2.5 transition hover:text-brand-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-brand-primary" />
                {SITE.phoneDisplay}
              </a>
            </address>
          </div>

          {/* Horaires */}
          <div className="text-left">
            <FooterHeading>Horaires</FooterHeading>
            <ul className="mt-5 space-y-4">
              {SITE.hours.map((row) => (
                <li key={row.days}>
                  <p className="text-sm font-semibold text-white">{row.days}</p>
                  <p className="mt-0.5 text-sm text-white/55">{row.hours}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-white/40">
              Sur place · À emporter
              <br />
              Livraison directe par téléphone
              <br />
              Deliveroo & Uber Eats
            </p>
          </div>

          {/* Navigation */}
          <div className="text-left">
            <FooterHeading>Navigation</FooterHeading>
            <nav className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((item) => (
                <FooterLink key={item.id} onClick={() => onNavigate(item.id)}>
                  {item.label}
                </FooterLink>
              ))}
              <a
                href={SITE.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-left text-sm text-white/55 transition hover:text-brand-primary"
              >
                Commander en ligne
              </a>
            </nav>
          </div>

          {/* Légal */}
          <div className="text-left">
            <FooterHeading>Informations légales</FooterHeading>
            <nav className="mt-5 flex flex-col gap-3">
              {LEGAL_LINKS.map((item) => (
                <FooterLink key={item.id} onClick={() => onLegal(item.id)}>
                  {item.label}
                </FooterLink>
              ))}
            </nav>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-5 block text-left text-xs text-white/35 transition hover:text-brand-primary"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-left text-xs text-white/30">
            © {new Date().getFullYear()} {SITE.name} — Tous droits réservés
          </p>
          <a
            href={SITE.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition hover:border-brand-primary hover:text-brand-primary"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
