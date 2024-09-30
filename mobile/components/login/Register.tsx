import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

import { ThemedText } from "@/components/ui/ThemedText";
import { ThemedInput } from "@/components/ui/ThemedInput";
import { ThemedButton } from "@/components/ui/ThemedButton";
import { TextDivider } from "@/components/ui/TextDivider";
import { CheckBox } from "@/components/ui/CheckBox";
import AuthProviders from "@/components/login/AuthProviders";
import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import CountryPicker from "../CountryPicker";
import CountryList from "../CountryList";
import { CountryWithFlag } from "@/types/countries";

const { width } = Dimensions.get("window");

type RegisterProps = {
	setActivePage: (page: "login" | "register") => void;
};

export default function Register({ setActivePage }: RegisterProps) {
	const [validForm, setValidForm] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rePassword, setRePassword] = useState("");
	const [staySigned, setStaySigned] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [pickedCountry, setPickedCountry] = useState<CountryWithFlag>();

	const onModalClose = () => {
		setIsModalVisible(false);
	};

	useEffect(() => {
		console.log("Picked country: ", pickedCountry);
	}, [pickedCountry]);

	useEffect(() => {
		const isValid =
			firstName.length > 0 &&
			lastName.length > 0 &&
			email.includes("@") &&
			password.length >= 6 &&
			password === rePassword;

		setValidForm(isValid);
	}, [firstName, lastName, email, password, rePassword]);

	return (
		<View style={styles.formContainer}>
			<View style={styles.formTitleContainer}>
				<ThemedText type="subtitle">Create an account</ThemedText>
				<ThemedText
					style={{
						color: Colors.common.primary_green,
						fontWeight: "bold",
					}}
				>
					Find a coach and reach your goals
				</ThemedText>
			</View>
			<View style={styles.form}>
				<View style={{ flexDirection: "row" }}>
					<ThemedInput
						placeholder="First name"
						width={width * 0.49}
						style={{ marginRight: width * 0.01 }}
						value={firstName}
						onChangeText={setFirstName}
					/>
					<ThemedInput
						placeholder="Last name"
						width={width * 0.49}
						style={{ marginLeft: width * 0.01 }}
						value={lastName}
						onChangeText={setLastName}
					/>
				</View>
				<ThemedInput
					placeholder="Country"
					value={
						pickedCountry
							? `${pickedCountry?.info.flag} ${pickedCountry?.info.name.common}`
							: ""
					}
					readOnly
					onPress={() => setIsModalVisible(true)}
				/>

				<CountryPicker
					isVisible={isModalVisible}
					onClose={onModalClose}
				>
					<CountryList
						onSelect={setPickedCountry}
						onCloseModal={onModalClose}
					/>
				</CountryPicker>
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
				<ThemedInput
					placeholder="Re-enter password"
					textContentType="password"
					keyboardType="default"
					secureTextEntry={true}
					value={rePassword}
					onChangeText={setRePassword}
				/>

				<ThemedText
					style={{
						width: width * 0.8,
						maxWidth: 400,
						fontSize: 10,
					}}
				>
					By signing up, you agree to our Terms of Service and Privacy
					Policy
				</ThemedText>
				<CheckBox
					label="Stay signed"
					style={{ marginBottom: 10 }}
					checked={staySigned}
					setChecked={setStaySigned}
				/>
				<ThemedButton
					label="Sign up"
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
			<View style={styles.signin}>
				<ThemedText style={{ marginRight: 5 }}>
					Already have an account ?
				</ThemedText>
				<TouchableOpacity
					activeOpacity={1}
					onPress={(_) => setActivePage("login")}
				>
					<ThemedText
						style={{
							color: Colors.common.primary_green,
							fontWeight: "bold",
						}}
					>
						Sign in
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
	formContainer: {
		alignItems: "center",
	},
	form: {
		alignItems: "center",
	},
	signin: {
		flexDirection: "row",
		marginTop: 10,
	},
});
