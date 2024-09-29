import React, { useState } from "react";
import { View, StyleSheet, Dimensions, ViewProps } from "react-native";
import { ThemedText } from "@/components/ui/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/Colors";

const screenDimensions = Dimensions.get("window");

type CheckBoxProps = ViewProps & {
	label: string;
	checked: boolean;
	setChecked: (checked: boolean) => void;
};

export function CheckBox({ label, style, checked, setChecked }: CheckBoxProps) {
	const color = useThemeColor({ light: "#000", dark: "#fff" }, "text");

	return (
		<View
			style={[styles.row, style]}
			onTouchEnd={(e) => setChecked(!checked)}
		>
			<MaterialCommunityIcons
				name="checkbox-marked"
				size={24}
				color={Colors.common.primary_green}
				style={[
					styles.checkbox,
					{
						display: checked ? "flex" : "none",
					},
				]}
			/>
			<MaterialCommunityIcons
				name="checkbox-blank"
				size={24}
				color={Colors.common.primary_green}
				style={[
					styles.checkbox,
					{ display: checked ? "none" : "flex" },
				]}
			/>
			<ThemedText>{label}</ThemedText>
		</View>
	);
}

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		alignItems: "center",
	},
	checkbox: {
		margin: 8,
	},
});
