import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          "My Website": "My Website",
          "Home": "Home Page",
          "About": "About",
          "This is the front page": "This is the front page"
        }
      },
      fi: {
        translation: {
          "My Website": "Minun Verkkosivustoni",
          "Home": "Etusivu",
          "About": "Tietoa Meistä",
          "This is the front page": "Tämä on etusivu"
        }
      }
    }
  });

export default i18n;
