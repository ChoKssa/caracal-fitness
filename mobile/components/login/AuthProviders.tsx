import { StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function AuthProviders() {
	const color = useThemeColor({}, "text");

	return (
		<View onTouchEnd={(e) => console.log("Google")}>
			<AntDesign
				name="google"
				size={24}
				color={color}
				style={{
					padding: 8,
					borderWidth: 1,
					borderRadius: 21,
					borderColor: color,
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
	},
});
