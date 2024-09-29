import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ThemedText } from "@/components/ui/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

const screenDimensions = Dimensions.get("window");

type TextDividerProps = {
	text?: string;
	width?: number;
};

export function TextDivider({
	text,
	width = screenDimensions.width * 0.8,
}: TextDividerProps) {
	const color = useThemeColor({ light: "#000", dark: "#fff" }, "text");

	return (
		<View style={[styles.container, { width }]}>
			<View style={[styles.line, { backgroundColor: color }]} />
			<ThemedText style={[styles.text]}>{text}</ThemedText>
			<View style={[styles.line, { backgroundColor: color }]} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row", // Les éléments sont alignés horizontalement
		alignItems: "center", // Centre verticalement les éléments
		marginVertical: 20,
	},
	line: {
		flex: 1, // S'étend pour occuper l'espace disponible
		height: 1,
		backgroundColor: "#000", // Couleur de la ligne (ici noire)
	},
	text: {
		marginHorizontal: 10, // Espace entre le texte et les lignes
		fontSize: 16,
		fontWeight: "bold",
	},
});
