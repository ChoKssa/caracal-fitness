import { ThemedText } from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { View, Text, StyleSheet } from "react-native";

export default function SettingsTab() {
	return (
		<ThemedView style={styles.container}>
			<ThemedText>Tab [Settings]</ThemedText>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
