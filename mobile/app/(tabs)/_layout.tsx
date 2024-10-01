import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";

const TabLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.common.primary_green,
				tabBarInactiveTintColor: Colors.common.blue_light,
				tabBarActiveBackgroundColor: Colors.common.gray_dark,
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: Colors.common.gray_dark,
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
	);
};

export default TabLayout;
