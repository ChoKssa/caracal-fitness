import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const tabIcon = {
	home: (props: any) => (
		<Feather
			name="home"
			size={24}
			{...props}
		/>
	),
	analytics: (props: any) => (
		<MaterialCommunityIcons
			name="google-analytics"
			size={24}
			{...props}
		/>
	),
	coaches: (props: any) => (
		<Feather
			name="compass"
			size={24}
			{...props}
		/>
	),
	profile: (props: any) => (
		<Feather
			name="user"
			size={24}
			{...props}
		/>
	),
	chat: (props: any) => (
		<Ionicons
			name="chatbox-outline"
			size={24}
			{...props}
		/>
	),
};
