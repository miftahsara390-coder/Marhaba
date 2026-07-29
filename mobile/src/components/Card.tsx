import { View, StyleSheet } from "react-native";

export default function Card({ children }: any) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", padding: 20, borderRadius: 16, shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 10, elevation: 3 }
});