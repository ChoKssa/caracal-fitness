import { FC, ReactNode, useEffect, useState, createContext } from "react";
import i18next from "i18next";
import { AsyncStorageService } from "@/services/storage/asyncStorage";

type TranslationContextType = {
	locale: string;
	changeLanguage: (locale: string) => void;
};

export const TranslationContext = createContext<TranslationContextType>({
	locale: "eng",
	changeLanguage: () => {},
});

export const TranslationProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [locale, setLocale] = useState(i18next.languages[0] || "eng");

	const changeLanguage = async (locale: string) => {
		setLocale(locale);
		i18next.changeLanguage(locale);
		await AsyncStorageService.setItem("preferred_language", locale);
	};

	const getUserLanguage = async () => {
		const language = await AsyncStorageService.getItem(
			"preferred_language"
		);

		if (language !== undefined) {
			setLocale(language);
			i18next.changeLanguage(language);
		}
	};

	useEffect(() => {
		getUserLanguage();
	}, []);

	return (
		<TranslationContext.Provider value={{ locale, changeLanguage }}>
			{children}
		</TranslationContext.Provider>
	);
};
