import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // 允许加载 JSON 文件
  .use(LanguageDetector) // 检测浏览器语言
  .use(initReactI18next) // 让 react-i18next 生效
  .init({
    fallbackLng: "en", // 默认语言
    supportedLngs: ["en", "fi"], // 仅支持英语和芬兰语
    debug: true, // 调试模式
    interpolation: {
      escapeValue: false, // React 已经有防注入机制
    },
    resources: {
      en: {
        translation: {
          home: "Home",
          about: "About",
          homepageText: "This is the front page.",
        },
      },
      fi: {
        translation: {
          home: "Etusivu",
          about: "Tietoa Meistä",
          homepageText: "Tämä on etusivu.",
        },
      },
    },
  });

export default i18n;
