import { useState } from "react";
import {
	StyleSheet,
	FlatList,
	Image,
	Pressable,
	Dimensions,
	StyleProp,
	ViewStyle,
	ImageStyle,
	TextStyle,
} from "react-native";
import Countries from "@/services/internationalization/countries.json";
import { ThemedText } from "./ui/ThemedText";
import { flags } from "@/assets/icons/countries/1x1";
import { CountryWithFlag, ISO639_3 } from "@/types/countries";
import { Colors } from "@/constants/Colors";
import { useLanguage } from "@/hooks/useLanguage";

const { width } = Dimensions.get("window");

type CountryListProps = {
	onSelect: (item: any) => void;
	onCloseModal: () => void;
	flagStyle?: StyleProp<ImageStyle>;
	listStyle?: StyleProp<ViewStyle>;
	countryNameStyle?: StyleProp<TextStyle>;
};

export default function CountryList({
	onSelect,
	onCloseModal,
	flagStyle,
	listStyle,
	countryNameStyle,
}: CountryListProps) {
	const { locale } = useLanguage();
	const [countriesList] = useState<CountryWithFlag[]>(
		Countries.sort((a, b) => {
			return a.name.common.localeCompare(b.name.common);
		})
			.map((country) => {
				try {
					return {
						info: country,
						flag: flags[country.cca2 as keyof typeof flags],
					};
				} catch (error) {
					console.error(error);
				}
			})
			.filter((country) => country !== undefined && country !== null)
	);

	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			data={countriesList}
			contentContainerStyle={[styles.listContainer, listStyle]}
			renderItem={({ item, index }) => {
				let countryName =
					item.info.translations[locale as ISO639_3]?.common;

				if (!countryName) {
					countryName = item.info.name.common;
				}
				return (
					<Pressable
						onPress={() => {
							onSelect(item);
							onCloseModal();
						}}
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginVertical: 10,
						}}
					>
						<Image
							source={item.flag}
							key={index}
							style={[styles.image, flagStyle]}
						/>
						<ThemedText
							style={countryNameStyle}
							lightColor={Colors.dark.text}
							darkColor={Colors.dark.text}
						>
							{countryName}
						</ThemedText>
					</Pressable>
				);
			}}
		/>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		paddingHorizontal: 20,
		justifyContent: "center",
	},
	image: {
		width: width * 0.1,
		height: width * 0.1,
		marginRight: 20,
		borderRadius: 20,
	},
});
