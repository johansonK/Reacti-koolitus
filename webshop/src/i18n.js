import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "cart": "Cart",
      "shops": "Our shops",
      "contact": "Contact us",
      "admin": "To admin view",
      "maintain-categories": "Maintain categories",
      "maintain-shops": "Maintain shops",
      "add-product": "Add products",
      "maintain-products": "Maintain products",
    }
  },
  ee: {
    translation: {
      "cart": "Ostukorv",
      "shops": "Meie poed",
      "contact": "Kontakteeru meiega",
      "admin": "Administraatori vaatesse",
      "maintain-categories": "Halda kategooriaid",
      "maintain-shops": "Halda poode",
      "add-product": "Lisa toode",
      "maintain-products": "Halda tooteid",
    }
  },  
  ru: {
    translation: {
      "cart": "Корзина",
      "shops": "Наши магазины",
      "contact": "Связаться c нами",
      "admin": "B вид администратора",
      "maintain-categories": "Поддерживать категории",
      "maintain-shops": "Поддерживать магазины",
      "add-product": "Добавить товар",
      "maintain-products": "Поддерживать продукты",
    }
  },  
  de: {
    translation: {
      "cart": "Warenkorb",
      "shops": "Unsere Shops",
      "contact": "Kontaktieren Sie uns",
      "admin": "Zur Admin-Ansicht",
      "maintain-categories": "Kategorien pflegen",
      "maintain-shops": "Shops pflegen",
      "add-product": "Produkt hinzufügen",
      "maintain-products": "Produkte pflegen",
    }
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;