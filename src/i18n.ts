import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en", 
  fallbackLng: "en", 
  interpolation: {
    escapeValue: false, 
  },
  resources: {
    en: {
      translation: {
        english: "English (EN)",
        portuguese: "Portuguese (BR)",
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        toggle: "Toggle",
        theme: "Theme",
        dark: "Dark",
        light: "Light",
        system: "System",
      },
    },
    "pt-BR": {
      translation: {
        english: "Inglês (EN)",
        portuguese: "Português (BR)",
        home: "Início",
        about: "Sobre",
        projects: "Projetos",
        contact: "Contato",
        toggle: "Alternar",
        theme: "Tema",
        dark: "Escuro",
        light: "Claro",
        system: "Sistema",
      },
    },
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
