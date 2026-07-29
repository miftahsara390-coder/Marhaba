import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { COLORS } from "@/constants/config";

export default function Button({ title, onPress, type = "primary", disabled = false, loading = false }: any) {
  const isOutline = type === "outline";
  return (
    <TouchableOpacity
      onPress={disabled || loading ? undefined : onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        isOutline && styles.outline,
        (disabled || loading) && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={isOutline ? COLORS.primary : "#fff"} />
      ) : (
        <Text style={[styles.text, isOutline && styles.outlineText]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: COLORS.primary, padding: 14, borderRadius: 12, alignItems: "center", marginTop: 10 },
  text: { color: "#fff", fontWeight: "600", fontSize: 15 },
  outline: { backgroundColor: "transparent", borderWidth: 1, borderColor: COLORS.primary },
  outlineText: { color: COLORS.primary },
  disabled: { opacity: 0.6 }
});