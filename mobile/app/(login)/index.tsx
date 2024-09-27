import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	ImageBackground,
	TouchableOpacity,
	Image,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("@/assets/images/welcome_screen.webp")}
				style={styles.backgroundImage}
				resizeMode="cover"
			>
				<LinearGradient
					colors={["transparent", "#ffffff"]}
					style={styles.gradient}
				/>
				<View style={styles.content}>
					<View style={styles.logoContainer}>
						<Image
							source={require("@/assets/images/caracal.png")}
							style={styles.logo}
							resizeMode="contain"
							width={13}
						/>
					</View>

					<View style={styles.textContainer}>
						<Text style={styles.title}>Ultimate Training</Text>
						<Text style={styles.subtitle}>
							Your Program Everywhere Anytime
						</Text>
					</View>

					<TouchableOpacity
						style={styles.button}
						onPress={(e) => router.navigate("/(login)/register")}
					>
						<Text style={styles.buttonText}>Get Started</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	gradient: {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: height / 3,
		height: height * 0.5,
	},
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
	},
	backgroundImage: {
		width: width,
		height: height / 1.5,
		flex: 1,
		justifyContent: "flex-end",
	},
	content: {
		alignItems: "center",
		paddingBottom: 70,
		padding: 20,
		width: "100%",
	},
	logoContainer: {
		marginBottom: 20,
	},
	logo: {
		// marginBottom: 20,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	textContainer: {
		alignItems: "center",
		marginBottom: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#000",
		textAlign: "center",
	},
	subtitle: {
		fontSize: 16,
		color: "#7e7e7e",
		textAlign: "center",
	},
	button: {
		backgroundColor: "#000",
		paddingVertical: 15,
		paddingHorizontal: 60,
		borderRadius: 30,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});
