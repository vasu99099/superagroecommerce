import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enHeader from '../locales/en/header.json';
import guHeader from '../locales/gu/header.json';

const resources = {
  en: {
    header: enHeader
  },
  gu: {
    header: guHeader
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    ns: ['header'],
    defaultNS: 'header',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
