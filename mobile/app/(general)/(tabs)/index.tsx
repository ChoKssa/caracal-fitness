import { ThemedText } from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { View, Text, StyleSheet } from "react-native";

export default function HomeTab() {
	return (
		<ThemedView style={styles.container}>
			<ThemedText>Tab [Home]</ThemedText>
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
