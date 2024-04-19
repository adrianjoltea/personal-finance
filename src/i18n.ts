import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enTranslation from "./common/en.json";
import roTranslation from "./common/ro.json";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    react: {
      bindI18n: "loaded languageChanged",
      bindI18nStore: "added",
      useSuspense: true,
    },
    resources: {
      en: enTranslation,
      ro: roTranslation,
    },
  });
export default i18n;
