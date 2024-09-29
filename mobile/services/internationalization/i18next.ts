import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/services/internationalization/locales/en.json';
import fr from '@/services/internationalization/locales/fr.json';

export const languageResources = {
    en: { translation: en },
    fr: { translation: fr },
};

i18next.use(initReactI18next).init({
    supportedLngs: Object.keys(languageResources),
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: languageResources,
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;
