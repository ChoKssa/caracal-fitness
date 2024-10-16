import { Colors } from "@/constants/Colors";
import { tabIcon } from "@/constants/icon";
import { ReactNode, useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";

type TabBarButtonProps = {
	isFocused: boolean;
	label:
		| string
		| ((props: {
				focused: boolean;
				color: string;
				position: any;
				children: string;
		  }) => ReactNode);
	onPress: () => void;
	onLongPress: () => void;
	routeName: string;
};

export const TabBarButton = ({
	isFocused,
	label,
	onPress,
	onLongPress,
	routeName,
}: TabBarButtonProps) => {
	const scale = useSharedValue(0);

	useEffect(() => {
		scale.value = withSpring(isFocused ? 1 : 0, { duration: 350 });
	}, [isFocused, scale]);

	const animatedStyle = useAnimatedStyle(() => {
		const opacity = interpolate(scale.value, [0, 1], [1, 0]);

		return {
			opacity,
		};
	});
	const animatedIconStyle = useAnimatedStyle(() => {
		const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
		const top = interpolate(scale.value, [0, 1], [0, 9]);

		return {
			transform: [{ scale: scaleValue }],
			top,
		};
	});

	return (
		<Pressable
			onPress={onPress}
			onLongPress={onLongPress}
			style={styles.tabbarItem}
		>
			<Animated.View style={animatedIconStyle}>
				{tabIcon[routeName as keyof typeof tabIcon]({
					color: isFocused
						? Colors.common.black
						: Colors.common.white,
				})}
			</Animated.View>
			<Animated.Text
				style={[
					{
						color: isFocused
							? Colors.common.black
							: Colors.common.white,
						fontSize: 12,
					},
					animatedStyle,
				]}
			>
				{label as string}
			</Animated.Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	tabbarItem: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
		borderRadius: 10,
	},
});
