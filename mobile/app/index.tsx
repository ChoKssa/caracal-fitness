import { Redirect } from "expo-router";

// check if the user is authenticated
// if not, redirect to the login page
// if yes, redirect to the welcome page
export default function Home() {
	return <Redirect href="/(login)/welcome" />;
}
