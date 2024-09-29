import { TranslationContext } from "@/providers/TranslationContext";
import { useLocales } from "expo-localization";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export function useLanguage() {
    const { locale, changeLanguage } = useContext(TranslationContext);
    const { t } = useTranslation();

    return { locale, changeLanguage, t, locales: useLocales() };
}
