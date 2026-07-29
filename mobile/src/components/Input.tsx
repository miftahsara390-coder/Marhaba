import { TextInput, StyleSheet } from "react-native";

export default function Input({ placeholder, secure, value, onChangeText }: any) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secure}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      placeholderTextColor="#9CA3AF"
    />
  );
}

const styles = StyleSheet.create({
  input: { backgroundColor: "#F3F4F6", padding: 14, borderRadius: 12, marginBottom: 12, fontSize: 15 }
});