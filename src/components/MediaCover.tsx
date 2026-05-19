import type { ReactNode } from "react";

type OverlayStrength = "light" | "medium" | "card";

const OVERLAY: Record<OverlayStrength, string> = {
  light: "bg-black/30",
  medium: "bg-black/45",
  card: "bg-gradient-to-t from-black/70 via-black/35 to-black/20",
};

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  overlay?: OverlayStrength;
  children?: ReactNode;
};

/** Image + voile sombre léger pour lisibilité du texte */
export function MediaCover({
  src,
  alt,
  className = "",
  imgClassName = "h-full w-full object-cover",
  overlay = "medium",
  children,
}: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src={src} alt={alt} className={imgClassName} />
      <div className={`absolute inset-0 ${OVERLAY[overlay]}`} aria-hidden />
      {children}
    </div>
  );
}
