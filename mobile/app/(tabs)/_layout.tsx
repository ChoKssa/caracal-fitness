import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";

const TabLayout = () => {
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: "#FFA001",
					tabBarInactiveTintColor: "#CDCDE0",
					tabBarShowLabel: false,
					tabBarStyle: {
						backgroundColor: "#161622",
						borderTopWidth: 1,
						borderTopColor: "#232533",
						height: 84,
					},
				}}
			>
				<Tabs.Screen
					name="home"
					options={{
						title: "Home",
						headerShown: false,
					}}
				/>
			</Tabs>

			<StatusBar
				backgroundColor="#161622"
				style="light"
			/>
		</>
	);
};

export default TabLayout;
