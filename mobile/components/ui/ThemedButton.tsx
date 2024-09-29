import { useThemeColor } from "@/hooks/useThemeColor";
import {
	Dimensions,
	TextInput,
	TextInputProps,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";

const screenDimensions = Dimensions.get("window");

type ThemedInputProps = TouchableOpacityProps & {
	lightColor?: string;
	darkColor?: string;
	width?: number;
	label: string;
};

export function ThemedButton({
	style,
	lightColor,
	darkColor,
	width = screenDimensions.width,
	label,
	...rest
}: ThemedInputProps) {
	return (
		<TouchableOpacity
			style={[
				{
					backgroundColor: Colors.common.primary_green,
					paddingVertical: 15,
					paddingHorizontal: 60,
					borderRadius: 30,
				},
				style,
			]}
			{...rest}
		>
			<ThemedText style={{ color: "#000", alignSelf: "center" }}>
				{label}
			</ThemedText>
		</TouchableOpacity>
	);
}
