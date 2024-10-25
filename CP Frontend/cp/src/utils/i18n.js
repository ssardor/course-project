import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to the Form Builder",
          login: "Login",
          register: "Register",
          home: "Home",
          admin: "Admin",
          // Add more translations here
        }
      },
      uz: {
        translation: {
          welcome: "Form Builderga xush kelibsiz",
          login: "Kirish",
          register: "Ro'yxatdan o'tish",
          home: "Bosh sahifa",
          admin: "Admin",
          // Add more translations here
        }
      },
      ru: {
        translation: {
          welcome: "Добро пожаловать в Конструктор Форм",
          login: "Вход",
          register: "Регистрация",
          home: "Главная",
          admin: "Админ",
          // Add more translations here
        }
      },
      es: {
        translation: {
          welcome: "Bienvenido al Constructor de Formularios",
          login: "Iniciar sesión",
          register: "Registrarse",
          home: "Inicio",
          admin: "Administrador",
          // Add more translations here
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;