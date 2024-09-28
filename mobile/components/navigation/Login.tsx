import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedButton } from "../ui/ThemedButton";
import { ThemedText } from "../ui/ThemedText";

type LoginProps = {
	setActivePage: (page: "login" | "register") => void;
};

export default function Login({ setActivePage }: LoginProps) {
	return (
		<View>
			<ThemedText>Login page</ThemedText>
			<ThemedButton
				label="Register"
				onPress={(e) => setActivePage("register")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	headerImage: {
		color: "#808080",
		bottom: -90,
		left: -35,
		position: "absolute",
	},
	titleContainer: {
		flexDirection: "row",
		gap: 8,
	},
});
