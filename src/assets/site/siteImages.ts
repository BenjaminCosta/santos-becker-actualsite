import homeHero from "./home/hero.png";
import homeAbout from "./home/about.webp";
import homePurpose from "./home/purpose.webp";
import homeTechnology from "./home/technology.webp";
import homeServiceTramites from "./home/service-tramites.webp";
import homeServiceMovilidad from "./home/service-movilidad.webp";
import homeServiceCompliance from "./home/service-compliance.webp";
import homeServiceComplementarios from "./home/service-complementarios.webp";

import nosotrosHero from "./nosotros/hero.webp";
import nosotrosAbout from "./nosotros/about.webp";
import nosotrosEnfoque from "./nosotros/enfoque.webp";
import nosotrosMetodologia from "./nosotros/metodologia.png";
import nosotrosDiferenciadores from "./nosotros/diferenciadores.webp";

import serviciosHero from "./servicios/hero.webp";
import serviciosMovilidad from "./servicios/movilidad.webp";
import serviciosTramites from "./servicios/tramites.webp";
import serviciosCompliance from "./servicios/compliance.webp";
import serviciosComplementarios from "./servicios/complementarios.webp";

import tecnologiaHero from "./tecnologia/hero.webp";
import tecnologiaSamVideo from "./tecnologia/sam-demo.mp4";

import inclusionHero from "./inclusion/hero.webp";
import inclusionPositionOne from "./inclusion/position-1.png";
import inclusionPositionTwo from "./inclusion/position-2.png";
import inclusionAlliancesMain from "./inclusion/alliances-main.webp";
import inclusionAlliancesSecondary from "./inclusion/alliances-secondary.webp";
import inclusionCta from "./inclusion/cta.webp";

import equipoHero from "./equipo/hero.webp";
import oscarSantos from "./equipo/oscar-santos.webp";
import cesarBecker from "./equipo/cesar-becker.webp";
import abigailDeArcos from "./equipo/abigail-de-arcos.webp";
import alejandraLopez from "./equipo/alejandra-lopez.webp";
import alexiaDelJobo from "./equipo/alexia-del-jobo.webp";
import andreaJimenez from "./equipo/andrea-jimenez.webp";
import armandoFlores from "./equipo/armando-flores.webp";
import armandoManuelSaavedra from "./equipo/armando-manuel-saavedra.webp";
import aylinPatino from "./equipo/aylin-patino.webp";
import daliaDuarte from "./equipo/dalia-duarte.webp";
import dianaGuzman from "./equipo/diana-guzman.webp";
import ethelDespy from "./equipo/ethel-despy.webp";
import gabrielaValladolid from "./equipo/gabriela-valladolid.webp";
import gustavoPerez from "./equipo/gustavo-perez.webp";
import ivanJimenez from "./equipo/ivan-jimenez.webp";
import ivonneMorales from "./equipo/ivonne-morales.webp";
import jaimeSegura from "./equipo/jaime-segura.webp";
import jesusOlvera from "./equipo/jesus-olvera.webp";
import joaquinArjona from "./equipo/joaquin-arjona.webp";
import jorgeCedillo from "./equipo/jorge-cedillo.webp";
import leslySanchez from "./equipo/lesly-sanchez.webp";
import margaritaHernandez from "./equipo/margarita-hernandez.webp";
import mariaEugeniaFlores from "./equipo/maria-eugenia-flores.webp";
import mariaFernandaRico from "./equipo/maria-fernanda-rico.webp";
import mariaJoseRamirez from "./equipo/maria-jose-ramirez.webp";
import marioRivera from "./equipo/mario-rivera.webp";
import miguelGodinez from "./equipo/miguel-godinez.webp";
import minervaSierra from "./equipo/minerva-sierra.webp";
import pedroMarquez from "./equipo/pedro-marquez.webp";
import ricardoAngeles from "./equipo/ricardo-angeles.webp";
import sofiaKargl from "./equipo/sofia-kargl.webp";
import stephanyTorres from "./equipo/stephany-torres.webp";
import teresaGalicia from "./equipo/teresa-galicia.webp";
import yaelEscalona from "./equipo/yael-escalona.webp";

import contactoHero from "./contacto/hero.webp";
import contactoOfficeOne from "./contacto/office-1.webp";
import contactoOfficeTwo from "./contacto/office-2.webp";

import acnurLogo from "./logos/acnur.svg";
import ailaLogo from "./logos/aila.png";
import amchamLogo from "./logos/amcham.png";
import asemLogo from "./logos/asem.png";
import cciFranceMexicoLogo from "./logos/cci-france-mexico.png";
import comceLogo from "./logos/comce.png";
import iloLogo from "./logos/ilo.svg";
import investMonterreyLogo from "./logos/invest-monterrey.svg";
import iomLogo from "./logos/iom.svg";
import tentLogo from "./logos/tent.svg";

export const homeImages = {
  hero: homeHero,
  about: homeAbout,
  purpose: homePurpose,
  technology: homeTechnology,
  services: [
    homeServiceTramites,
    homeServiceMovilidad,
    homeServiceCompliance,
    homeServiceComplementarios,
  ],
};

export const nosotrosImages = {
  hero: nosotrosHero,
  about: nosotrosAbout,
  enfoque: nosotrosEnfoque,
  metodologia: nosotrosMetodologia,
  diferenciadores: nosotrosDiferenciadores,
};

export const serviciosImages = {
  hero: serviciosHero,
  items: [
    serviciosMovilidad,
    serviciosTramites,
    serviciosCompliance,
    serviciosComplementarios,
  ],
};

export const tecnologiaImages = {
  hero: tecnologiaHero,
  sam: tecnologiaHero,
  samVideo: tecnologiaSamVideo,
};

export const inclusionImages = {
  hero: inclusionHero,
  position: [inclusionPositionOne, inclusionPositionTwo],
  alliancesMain: inclusionAlliancesMain,
  alliancesSecondary: inclusionAlliancesSecondary,
  cta: inclusionCta,
};

export const contactoImages = {
  hero: contactoHero,
  offices: [contactoHero, contactoOfficeOne, contactoOfficeTwo, contactoOfficeOne],
};

export const teamImages = {
  hero: equipoHero,
  founders: {
    oscar: oscarSantos,
    cesar: cesarBecker,
  },
  members: {
    "abigail-de-arcos": abigailDeArcos,
    "alejandra-lopez": alejandraLopez,
    "alexia-del-jobo": alexiaDelJobo,
    "andrea-jimenez": andreaJimenez,
    "armando-flores": armandoFlores,
    "armando-manuel-saavedra": armandoManuelSaavedra,
    "aylin-patino": aylinPatino,
    "dalia-duarte": daliaDuarte,
    "diana-guzman": dianaGuzman,
    "ethel-despy": ethelDespy,
    "gabriela-valladolid": gabrielaValladolid,
    "gustavo-perez": gustavoPerez,
    "ivan-jimenez": ivanJimenez,
    "ivonne-morales": ivonneMorales,
    "jaime-segura": jaimeSegura,
    "jesus-olvera": jesusOlvera,
    "joaquin-arjona": joaquinArjona,
    "jorge-cedillo": jorgeCedillo,
    "lesly-sanchez": leslySanchez,
    "margarita-hernandez": margaritaHernandez,
    "maria-eugenia-flores": mariaEugeniaFlores,
    "maria-fernanda-rico": mariaFernandaRico,
    "maria-jose-ramirez": mariaJoseRamirez,
    "mario-rivera": marioRivera,
    "miguel-godinez": miguelGodinez,
    "minerva-sierra": minervaSierra,
    "pedro-marquez": pedroMarquez,
    "ricardo-angeles": ricardoAngeles,
    "sofia-kargl": sofiaKargl,
    "stephany-torres": stephanyTorres,
    "teresa-galicia": teresaGalicia,
    "yael-escalona": yaelEscalona,
  },
};

export const partnerLogos = {
  acnur: { src: acnurLogo, alt: "ACNUR" },
  aila: { src: ailaLogo, alt: "AILA" },
  amcham: { src: amchamLogo, alt: "AMCHAM Mexico" },
  asem: { src: asemLogo, alt: "ASEM" },
  cciFranceMexico: { src: cciFranceMexicoLogo, alt: "CCI France Mexico" },
  comce: { src: comceLogo, alt: "COMCE" },
  ilo: { src: iloLogo, alt: "International Labour Organization" },
  investMonterrey: { src: investMonterreyLogo, alt: "Invest Monterrey" },
  iom: { src: iomLogo, alt: "IOM" },
  tent: { src: tentLogo, alt: "Tent Partnership for Refugees" },
};

const logoAliases = new Map<string, keyof typeof partnerLogos>([
  ["acnur", "acnur"],
  ["unhcr", "acnur"],
  ["联合国难民署", "acnur"],
  ["oim", "iom"],
  ["iom", "iom"],
  ["国际移民组织", "iom"],
  ["tent partnership for refugees", "tent"],
  ["tent难民合作伙伴计划", "tent"],
  ["comce", "comce"],
  ["invest monterrey", "investMonterrey"],
  ["投资蒙特雷", "investMonterrey"],
  ["cci france mexico", "cciFranceMexico"],
  ["cci france méxico", "cciFranceMexico"],
  ["cci法国墨西哥", "cciFranceMexico"],
  ["aila", "aila"],
  ["oit", "ilo"],
  ["ilo", "ilo"],
  ["国际劳工组织", "ilo"],
  ["asem", "asem"],
  ["amcham mexico", "amcham"],
]);

function normalizeLogoName(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

export function resolvePartnerLogo(name: string) {
  const logoKey = logoAliases.get(normalizeLogoName(name)) ?? logoAliases.get(name.trim());
  return logoKey ? partnerLogos[logoKey] : null;
}
