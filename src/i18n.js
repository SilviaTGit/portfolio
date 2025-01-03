import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import it from './locales/it.json';
import fr from './locales/fr.json';

i18n
  .use(LanguageDetector) // To automatically detect language
  .use(initReactI18next) // To integrate React
  .init({
    resources: {
      en: { translation: en },
      it: { translation: it },
      fr: { translation: fr },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;