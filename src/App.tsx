import { useCallback, useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { PartnersBar } from "./components/PartnersBar";
import { SeoHead } from "./components/SeoHead";
import { StructuredData } from "./components/StructuredData";
import { Accueil } from "./pages/Accueil";
import { Carte } from "./pages/Carte";
import { CarteCategorie } from "./pages/CarteCategorie";
import { Histoire } from "./pages/Histoire";
import { Contact } from "./pages/Contact";
import { Legal, type LegalPageId } from "./pages/Legal";
import type { CategoryId } from "./data/menu";
import type { PageId } from "./data/site";
import type { AppRoute } from "./data/seo";
import {
  buildPath,
  parsePath,
  routeCategoryId,
  routeLegalId,
  routeToPageId,
} from "./lib/router";

function readRoute(): AppRoute {
  return parsePath(window.location.pathname);
}

export default function App() {
  const [route, setRoute] = useState<AppRoute>(readRoute);
  const [scrolled, setScrolled] = useState(false);

  const page = routeToPageId(route);
  const categoryId = routeCategoryId(route);
  const legalPage = routeLegalId(route);

  const goTo = useCallback((next: AppRoute, smoothScroll = true) => {
    const path = buildPath(next);
    if (path !== window.location.pathname) {
      window.history.pushState(null, "", path);
    }
    setRoute(next);
    if (smoothScroll) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPopState = () => {
      setRoute(readRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (next: PageId) => {
    goTo({ type: "page", page: next });
  };

  const openLegal = (id: LegalPageId) => {
    goTo({ type: "legal", legal: id });
  };

  const closeLegal = () => {
    goTo({ type: "page", page: "accueil" });
  };

  const openCategory = (id: CategoryId) => {
    goTo({ type: "category", page: "carte", categoryId: id });
  };

  const backToCarte = () => {
    goTo({ type: "page", page: "carte" });
  };

  return (
    <div className="min-h-screen bg-brand-dark">
      <SeoHead route={route} />
      <StructuredData />

      <Navbar current={page} onNavigate={navigate} scrolled={scrolled} />

      <main id="main-content">
        {legalPage ? (
          <Legal type={legalPage} onBack={closeLegal} />
        ) : (
          <>
            {page === "accueil" && (
              <Accueil onNavigate={navigate} onOpenCategory={openCategory} />
            )}
            {page === "carte" && categoryId && (
              <CarteCategorie categoryId={categoryId} onBack={backToCarte} />
            )}
            {page === "carte" && !categoryId && <Carte onOpenCategory={openCategory} />}
            {page === "histoire" && <Histoire />}
            {page === "contact" && <Contact />}
          </>
        )}
      </main>

      {!legalPage && <PartnersBar />}
      <Footer onNavigate={navigate} onLegal={openLegal} />
    </div>
  );
}
