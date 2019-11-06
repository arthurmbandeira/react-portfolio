import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  pt_BR: {
      translation: {
          "contato": "Contato",
          "artigos": "Artigos",
          "portfolio": "Portfólio",
      }
  },
  en: {
    translation: {
        "contato": "Contact",
        "artigos": "Articles",
        "portfolio": "Portfolio",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "pt_BR",
    fallbackLng: "pt_BR",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;