import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedView } from "@/components/ui/ThemedView";
import { ThemedText } from "@/components/ui/ThemedText";

const Chat = () => {
	const insets = useSafeAreaInsets();

	return (
		<ThemedView style={{ height: "100%", paddingTop: insets.top }}>
			<ThemedText>Chat</ThemedText>
		</ThemedView>
	);
};

export default Chat;
