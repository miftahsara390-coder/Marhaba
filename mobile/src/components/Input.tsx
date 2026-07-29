import { TextInput, StyleSheet, View, Text } from "react-native";
import { COLORS } from "@/constants/config";

export default function Input({ placeholder, secure, value, onChangeText, error }: any) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secure}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, error && styles.inputError]}
        placeholderTextColor="#9CA3AF"
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 12 },
  input: {
    backgroundColor: COLORS.inputBg,
    padding: 14,
    borderRadius: 12,
    fontSize: 15,
    color: COLORS.textDark,
  },
  inputError: { borderWidth: 1, borderColor: COLORS.error },
  errorText: { color: COLORS.error, fontSize: 12, marginTop: 4, marginLeft: 4 },
});