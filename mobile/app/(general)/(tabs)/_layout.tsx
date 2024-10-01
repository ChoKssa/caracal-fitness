import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default function TabLayout() {
	const tabBackgroundColor = useThemeColor(
		{ dark: Colors.common.primary_green, light: Colors.dark.background },
		"background"
	);
	const tabTintColor = useThemeColor(
		{ dark: Colors.dark.text, light: Colors.common.primary_green },
		"text"
	);

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: tabTintColor,
				headerShown: false,
				tabBarItemStyle: {
					justifyContent: "center",
					alignSelf: "center",
				},
				tabBarStyle: [
					{ backgroundColor: tabBackgroundColor },
					styles.tabBar,
				],
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => (
						<FontAwesome
							size={28}
							name="home"
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: "Settings",
					tabBarIcon: ({ color }) => (
						<FontAwesome
							size={28}
							name="cog"
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}

const styles = StyleSheet.create({
	tabBar: {
		alignSelf: "center",
		borderTopWidth: 0,
		borderRadius: 20,
		width: width * 0.8,
	},
});
