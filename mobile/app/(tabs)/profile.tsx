import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedView } from "@/components/ui/ThemedView";
import { ThemedText } from "@/components/ui/ThemedText";

const Profile = () => {
	const insets = useSafeAreaInsets();

	return (
		<ThemedView style={{ height: "100%", paddingTop: insets.top }}>
			<ThemedText>Profile</ThemedText>
		</ThemedView>
	);
};

export default Profile;
