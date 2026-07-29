import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "@/constants/config";

export default function Button({ title, onPress, type = "primary" }: any) {
  const isOutline = type === "outline";
  const isDanger = type === "danger";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isOutline && styles.outline,
        isDanger && styles.danger,
      ]}
    >
      <Text
        style={[
          styles.text,
          isOutline && styles.outlineText,
          isDanger && styles.dangerText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  text: { color: "#fff", fontWeight: "600", fontSize: 15 },
  outline: { backgroundColor: "transparent", borderWidth: 1, borderColor: COLORS.primary },
  outlineText: { color: COLORS.primary },
  danger: { backgroundColor: "transparent", borderWidth: 1, borderColor: COLORS.error },
  dangerText: { color: COLORS.error },
});