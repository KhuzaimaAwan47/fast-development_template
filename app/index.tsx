import { useEffect } from "react";
import { useRouter, useSegments } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "./redux-code/store";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { allColors } from "@/constants/theme";

export default function Index() {
  const router = useRouter();
  const segments = useSegments();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.userState);

  useEffect(() => {
    // Wait for Redux state to be ready
    if (user === undefined) return;

    const inAuthGroup = segments[0] === "(auth)";
    const inTabsGroup = segments[0] === "(tabs)";

    if (!isAuthenticated && !inAuthGroup) {
      // Redirect to sign-in if not authenticated
      router.replace("/(auth)/sign-in");
    } else if (isAuthenticated && !inTabsGroup) {
      // Redirect to tabs if authenticated
      router.replace("/(tabs)");
    }
  }, [isAuthenticated, segments, user, router]);

  // Show loading while checking auth state
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={allColors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: allColors.white,
  },
});
