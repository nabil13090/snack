import { MEDIA } from "../assets/media";

type Props = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  /** light = navbar blanche au scroll */
  light?: boolean;
};

const sizes = { sm: 40, md: 48, lg: 72 };

export function Logo({ size = "md", showText = true, light = false }: Props) {
  const px = sizes[size];

  return (
    <span className="flex items-center gap-3">
      <img
        src={MEDIA.logo}
        alt="Snack Du Lion"
        className="shrink-0 rounded-full object-cover shadow-lg shadow-brand-primary/25"
        style={{ width: px, height: px }}
      />
      {showText && (
        <span
          className={`font-display text-base font-bold uppercase leading-tight sm:text-lg ${
            light ? "text-neutral-900" : "text-white"
          }`}
        >
          Snack{" "}
          <span className="text-brand-primary">Du Lion</span>
        </span>
      )}
    </span>
  );
}
