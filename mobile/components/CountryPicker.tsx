import { Modal, View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type CountryPickerProps = {
	isVisible: boolean;
	children: React.ReactNode;
	onClose: () => void;
};

export default function CountryPicker({
	isVisible,
	children,
	onClose,
}: CountryPickerProps) {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={isVisible}
		>
			<View style={styles.modalContent}>
				{children}
				<View style={styles.titleContainer}>
					<Pressable onPress={onClose}>
						<MaterialIcons
							name="close"
							color="#fff"
							size={22}
						/>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	modalContent: {
		flexDirection: "row",
		height: "35%",
		width: "100%",
		backgroundColor: "#25292e",
		borderTopRightRadius: 18,
		borderTopLeftRadius: 18,
		position: "absolute",
		bottom: 0,
	},
	titleContainer: {
		height: "16%",
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		paddingHorizontal: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	title: {
		color: "#fff",
		fontSize: 16,
	},
});
