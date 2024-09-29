import { useThemeColor } from "@/hooks/useThemeColor";
import { Dimensions, TextInput, TextInputProps } from "react-native";

const screenDimensions = Dimensions.get("window");

type ThemedInputProps = TextInputProps & {
	lightColor?: string;
	darkColor?: string;
	width?: number;
};

export function ThemedInput({
	style,
	lightColor,
	darkColor,
	width = screenDimensions.width,
	...rest
}: ThemedInputProps) {
	const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

	return (
		<TextInput
			placeholderTextColor={"#555555"}
			style={[
				{
					borderWidth: 1,
					borderColor: "#555555",
					borderRadius: 15,
					padding: 15,
					width: width * 0.8,
					maxWidth: 400,
					color,
					marginVertical: 5,
				},
				style,
			]}
			{...rest}
		/>
	);
}
