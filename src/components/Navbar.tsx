import { motion } from "motion/react";
import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS, SITE, type PageId } from "../data/site";
import { Logo } from "./Logo";

type Props = {
  current: PageId;
  onNavigate: (page: PageId) => void;
  scrolled: boolean;
};

export function Navbar({ current, onNavigate, scrolled }: Props) {
  const [open, setOpen] = useState(false);

  const go = (page: PageId) => {
    onNavigate(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkClass = (active: boolean) => {
    if (scrolled) {
      return active
        ? "text-brand-primary"
        : "text-neutral-600 hover:text-neutral-900";
    }
    return active ? "text-brand-primary" : "text-white/70 hover:text-white";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-neutral-200/80 bg-white/95 shadow-md backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <motion.button
          type="button"
          onClick={() => go("accueil")}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-left"
        >
          <Logo light={scrolled} />
        </motion.button>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => go(item.id)}
                className={`text-xs font-bold uppercase tracking-wide transition-colors ${linkClass(current === item.id)}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <motion.a
          href={SITE.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden rounded-full bg-brand-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-primary/25 sm:inline-flex"
        >
          Commander
        </motion.a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`rounded-lg p-2 md:hidden ${scrolled ? "text-neutral-900" : "text-white"}`}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`w-full border-t px-4 py-6 backdrop-blur-xl md:hidden ${
            scrolled
              ? "border-neutral-200 bg-white/98"
              : "border-white/10 bg-neutral-950/95"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => go(item.id)}
                  className={`w-full text-left text-lg font-bold uppercase ${
                    current === item.id
                      ? "text-brand-primary"
                      : scrolled
                        ? "text-neutral-800"
                        : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={SITE.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex w-full justify-center rounded-full bg-brand-primary py-3 text-sm font-bold uppercase text-white"
              >
                Commander
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
