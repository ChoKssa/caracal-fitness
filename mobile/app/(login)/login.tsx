import { Dimensions, StyleSheet, View } from "react-native";

import { useState } from "react";
import Login from "@/components/navigation/Login";
import Register from "@/components/navigation/Register";
import { ThemedView } from "@/components/ui/ThemedView";
import { ThemedText } from "@/components/ui/ThemedText";

const { height } = Dimensions.get("window");

export default function LoginScreen() {
	const [activePage, setActivePage] = useState<"login" | "register">(
		"register"
	);
	return (
		<ThemedView
			style={[
				styles.container,
				{
					height: height,
				},
			]}
		>
			<View style={styles.titleContainer}>
				<View style={styles.titleContainer}>
					<ThemedText
						type="title"
						style={styles.title}
					>
						Caracal Fitness
					</ThemedText>
				</View>
			</View>
			{activePage === "login" ? (
				<Login setActivePage={setActivePage} />
			) : (
				<Register setActivePage={setActivePage} />
			)}
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 30,
	},
	titleContainer: {
		marginTop: 5,
		marginBottom: 20,
		alignItems: "center",
	},
	title: {
		paddingTop: 20,
		fontSize: 40,
		textAlign: "center",
		fontFamily: "Lato-Bold",
	},
});
