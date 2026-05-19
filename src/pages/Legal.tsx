import { ArrowLeft } from "lucide-react";
import { SITE } from "../data/site";

export type LegalPageId = "cgv" | "confidentialite" | "cookies";

type Props = {
  type: LegalPageId;
  onBack: () => void;
};

const CONTENT: Record<
  LegalPageId,
  { title: string; sections: { heading: string; body: string }[] }
> = {
  cgv: {
    title: "Conditions générales de vente",
    sections: [
      {
        heading: "Objet",
        body: `Les présentes conditions régissent les ventes de produits alimentaires proposés par ${SITE.name}, situé au ${SITE.address.line1}, ${SITE.address.line2}.`,
      },
      {
        heading: "Commandes",
        body:
          "Les commandes peuvent être passées sur place, à emporter ou via nos plateformes partenaires (Deliveroo, Uber Eats). Les prix affichés sur la carte sont indicatifs et peuvent varier selon le canal de commande.",
      },
      {
        heading: "Paiement",
        body:
          "Nous acceptons les cartes bancaires (CB, Visa, Mastercard) ainsi que les titres restaurant. Le paiement est exigible au moment de la commande ou de la livraison selon le mode choisi.",
      },
      {
        heading: "Réclamations",
        body: `Pour toute réclamation, contactez-nous au ${SITE.phoneDisplay} ou par e-mail à ${SITE.email}.`,
      },
    ],
  },
  confidentialite: {
    title: "Politique de confidentialité",
    sections: [
      {
        heading: "Données collectées",
        body: `Lors d'une commande ou d'une prise de contact, nous pouvons collecter votre nom, numéro de téléphone, adresse de livraison et adresse e-mail, uniquement pour traiter votre demande.`,
      },
      {
        heading: "Utilisation",
        body:
          "Ces données ne sont utilisées que pour la gestion des commandes, la livraison et le suivi client. Elles ne sont ni vendues ni cédées à des tiers à des fins commerciales.",
      },
      {
        heading: "Vos droits",
        body: `Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contact : ${SITE.email}.`,
      },
    ],
  },
  cookies: {
    title: "Politique cookies",
    sections: [
      {
        heading: "Qu'est-ce qu'un cookie ?",
        body:
          "Un cookie est un petit fichier déposé sur votre appareil lors de la visite du site. Il permet d'améliorer votre navigation et de mesurer l'audience de manière anonyme.",
      },
      {
        heading: "Cookies utilisés",
        body:
          "Ce site peut utiliser des cookies techniques nécessaires au fonctionnement, ainsi que des cookies de mesure d'audience (anonymisés). Aucune publicité ciblée n'est diffusée via ce site.",
      },
      {
        heading: "Gestion",
        body:
          "Vous pouvez refuser ou supprimer les cookies via les paramètres de votre navigateur. Le refus de certains cookies peut limiter certaines fonctionnalités du site.",
      },
    ],
  },
};

export function Legal({ type, onBack }: Props) {
  const { title, sections } = CONTENT[type];

  return (
    <article className="min-h-[60vh] bg-brand-dark py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <button
          type="button"
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-brand-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </button>

        <h1 className="font-display text-4xl font-black uppercase text-white">{title}</h1>
        <p className="mt-2 text-sm text-white/40">Dernière mise à jour : {new Date().getFullYear()}</p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-bold text-brand-accent">{section.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
