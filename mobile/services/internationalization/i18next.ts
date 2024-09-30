import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import eng from '@/services/internationalization/locales/eng.json';
import fra from '@/services/internationalization/locales/fra.json';

export const languageResources = {
    eng: { translation: eng },
    fra: { translation: fra },
};

i18next.use(initReactI18next).init({
    supportedLngs: Object.keys(languageResources),
    compatibilityJSON: 'v3',
    lng: 'eng',
    fallbackLng: 'eng',
    resources: languageResources,
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;
