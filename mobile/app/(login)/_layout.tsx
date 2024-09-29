import { Stack } from "expo-router";
import React from "react";

export default function LoginLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
				// gestureEnabled: false,
				animation: "slide_from_bottom",
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen name="login" />
		</Stack>
	);
}
