import heroVideo from "./img/videobanniere.mp4";
import logo from "./img/logo.png";
import lion from "./img/lion.webp";
import sectionPizza from "./img/sectionpizza.png";
import sectionSandwichs from "./img/sectionsandwichs.png";
import sectionTacos from "./img/sectiontacos.png";
import sectionBurger from "./img/burger.png";
import sectionTunis from "./img/sectionspecialitertunis.png";
import chapati from "./img/chapati.png";
import chapatiOeuf from "./img/chapatioeuf.png";
import baguetteFarcie from "./img/baguettefarcie.png";
import makloub from "./img/makloub.png";
import merguez from "./img/merguez.png";
import chiche from "./img/chiche.png";
import escalope from "./img/escalope.png";
import americainSandwich from "./img/americainsandwich.png";
import kebab from "./img/kebab.png";
import curryBoursin from "./img/curryboursin.png";
import cheese from "./img/cheese.png";
import doubleCheese from "./img/doublecheese.png";
import chicken from "./img/chicken.png";
import americain from "./img/americain.png";
import fish from "./img/fish.png";
import tacos from "./img/tacos.png";
import assiette from "./img/assiette.png";
import apetizer from "./img/apetizer.png";
import boisson33 from "./img/33cl.png";
import boisson50 from "./img/50cl.png";
import boisson15 from "./img/1.5l.png";
import tiramisu from "./img/tiramisu.png";
import tarteDaim from "./img/tarteaudaim.png";
import eau from "./img/eau.png";
import sectionBoissonsDesserts from "./img/boissiondessert.png";
import deliveroo from "./img/delliverro.png";
import uber from "./img/uber.png";
import cb from "./img/CB.png";
import ticketResto from "./img/TR.png";

export const MEDIA = {
  heroVideo,
  logo,
  lion,
  sections: {
    pizzas: sectionPizza,
    sandwichs: sectionSandwichs,
    tacos: sectionTacos,
    burgers: sectionBurger,
    "specialites-tunisiennes": sectionTunis,
    "formules-boissons": sectionBoissonsDesserts,
  },
  products: {
    chapati,
    chapatiOeuf,
    baguetteFarcie,
    makloub,
    merguez,
    chiche,
    escalope,
    americainSandwich,
    kebab,
    curryBoursin,
    cheese,
    doubleCheese,
    chicken,
    americain,
    fish,
    tacos,
    assiette,
    apetizer,
    boisson33,
    boisson50,
    boisson15,
    tiramisu,
    tarteDaim,
    eau,
  },
  partners: {
    deliveroo,
    uber,
    cb,
    ticketResto,
  },
} as const;
