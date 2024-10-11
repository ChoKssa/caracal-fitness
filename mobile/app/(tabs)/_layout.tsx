import { Tabs } from "expo-router";
import { TabBar } from "@/components/TabBar";

const TabLayout = () => {
	return (
		<Tabs
			tabBar={(props) => <TabBar {...props} />}
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
				}}
			/>
			<Tabs.Screen
				name="analytics"
				options={{
					title: "Analytics",
				}}
			/>
			<Tabs.Screen
				name="coaches"
				options={{
					title: "Coaches",
				}}
			/>
			<Tabs.Screen
				name="chat"
				options={{
					title: "Chat",
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
				}}
			/>
		</Tabs>
	);
};

export default TabLayout;
