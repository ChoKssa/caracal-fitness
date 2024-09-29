import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

import { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ui/ThemedText";
import { ThemedInput } from "@/components/ui/ThemedInput";
import { CheckBox } from "@/components/ui/CheckBox";
import { ThemedButton } from "@/components/ui/ThemedButton";
import { TextDivider } from "../ui/TextDivider";
import AuthProviders from "../login/AuthProviders";

const { width } = Dimensions.get("window");

type LoginProps = {
	setActivePage: (page: "login" | "register") => void;
};

export default function Login({ setActivePage }: LoginProps) {
	const [validForm, setValidForm] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [staySigned, setStaySigned] = useState(false);

	useEffect(() => {
		const isValid = email.includes("@") && password.length >= 1;
		setValidForm(isValid);
	}, [email, password]);

	return (
		<View style={styles.formContainer}>
			<View style={styles.formTitleContainer}>
				<ThemedText type="subtitle">Welcome back!</ThemedText>
				<ThemedText
					style={{
						color: Colors.common.primary_green,
						fontWeight: "bold",
					}}
				>
					Please login to continue
				</ThemedText>
			</View>
			<View style={styles.form}>
				<ThemedInput
					placeholder="Email"
					textContentType="emailAddress"
					keyboardType="email-address"
					value={email}
					onChangeText={setEmail}
				/>
				<ThemedInput
					placeholder="Password"
					textContentType="password"
					keyboardType="default"
					secureTextEntry={true}
					value={password}
					onChangeText={setPassword}
				/>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 20,
						width: width * 0.8,
					}}
				>
					<CheckBox
						label="Stay signed"
						checked={staySigned}
						setChecked={setStaySigned}
						style={{}}
					/>
					<TouchableOpacity
						activeOpacity={1}
						onPress={() => console.log("Forgot password")}
					>
						<ThemedText
							style={{ color: Colors.common.primary_green }}
						>
							Forgot password?
						</ThemedText>
					</TouchableOpacity>
				</View>
				<ThemedButton
					label="Log In"
					disabled={!validForm}
					onPress={(e) => console.log("Register button pressed")}
					style={{
						width: width * 0.8,
						borderRadius: 18,
						opacity: validForm ? 1 : 0.5,
					}}
					width={width}
				/>
			</View>
			<TextDivider text="or with" />
			<AuthProviders />
			<View style={styles.register}>
				<ThemedText style={{ marginRight: 5 }}>
					Don't have an account ?
				</ThemedText>
				<TouchableOpacity
					activeOpacity={1}
					onPress={(_) => setActivePage("register")}
				>
					<ThemedText
						style={{
							color: Colors.common.primary_green,
							fontWeight: "bold",
						}}
					>
						Sign up
					</ThemedText>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		marginTop: 5,
		marginBottom: 20,
		alignItems: "center",
	},
	formTitleContainer: {
		alignItems: "center",
		marginBottom: 20,
	},
	title: {
		paddingTop: 20,
		fontSize: 40,
		textAlign: "center",
		fontFamily: "Lato-Bold",
	},
	formContainer: {
		alignItems: "center",
	},
	form: {
		alignItems: "center",
	},
	register: {
		flexDirection: "row",
		marginTop: 20,
	},
});
