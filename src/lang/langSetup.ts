import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import {Ru, En} from "./langTrans";

i18next.use(initReactI18next).init({
  lng: "en", 
  debug: false,
  resources: {
    en: {
      translation: En,
    },
    ru: {
      translation: Ru,
    },
  },
});
