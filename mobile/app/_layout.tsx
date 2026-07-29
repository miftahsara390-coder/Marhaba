import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { Stack, router } from "expo-router";
import { useAuth } from "@/store/auth";
import { COLORS } from "@/constants/config";

export default function RootLayout() {
  const { token, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    if (token) {
      router.replace("/(app)");
    } else {
      router.replace("/(auth)/login");
    }
  }, [token, isLoading]);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.background,
        }}
      >
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(app)" />
    </Stack>
  );
}