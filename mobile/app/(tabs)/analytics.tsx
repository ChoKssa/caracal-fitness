import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedView } from "@/components/ui/ThemedView";
import { ThemedText } from "@/components/ui/ThemedText";

const Analytics = () => {
	const insets = useSafeAreaInsets();

	return (
		<ThemedView style={{ height: "100%", paddingTop: insets.top }}>
			<ThemedText>Analytics</ThemedText>
		</ThemedView>
	);
};

export default Analytics;
