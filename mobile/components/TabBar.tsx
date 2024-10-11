import { View, StyleSheet, LayoutChangeEvent } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TabBarButton } from "./TabBarButton";
import { useState } from "react";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";
import { Colors } from "@/constants/Colors";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
	const [dimensions, setDimensions] = useState({ height: 20, width: 100 });
	const buttonWidth = dimensions.width / state.routes.length;

	const tabPositionX = useSharedValue(0);

	const onTabbarLayout = (event: LayoutChangeEvent) => {
		setDimensions({
			height: event.nativeEvent.layout.height,
			width: event.nativeEvent.layout.width,
		});
	};

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: tabPositionX.value }],
		};
	});

	return (
		<View
			onLayout={onTabbarLayout}
			style={styles.tabbar}
		>
			<Animated.View
				style={[styles.selector, { width: buttonWidth }, animatedStyle]}
			/>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					tabPositionX.value = withSpring(buttonWidth * index, {
						duration: 1500,
					});
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				return (
					<TabBarButton
						key={route.name}
						isFocused={isFocused}
						label={label}
						onPress={onPress}
						onLongPress={onLongPress}
						routeName={route.name}
					/>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	tabbar: {
		position: "absolute",
		bottom: 50,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: Colors.common.black,
		marginHorizontal: 20,
		paddingVertical: 15,
		borderRadius: 35,
		shadowColor: Colors.common.black,
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowRadius: 10,
		shadowOpacity: 0.5,
	},
	selector: {
		position: "absolute",
		height: "100%",
		backgroundColor: Colors.common.primary_green,
		borderRadius: 35,
	},
});
