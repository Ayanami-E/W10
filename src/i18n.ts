import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about": "About",
      "frontPage": "This is the front page"
    }
  },
  fi: {
    translation: {
      "home": "Etusivu",
      "about": "Tietoa Meistä",
      "frontPage": "Tämä on etusivu"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fi'],
    interpolation: {
      escapeValue: false,
    }
  })
  .then(() => {
    console.log('i18n initialized');
  });

export default i18n;
