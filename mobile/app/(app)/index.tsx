import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { COLORS } from "@/constants/config";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🔒 Marhba</Text>
      </View>

      <Card style={styles.mainCard}>
        <View style={styles.badge}><Text style={styles.badgeText}>🛡️</Text></View>
        <Text style={styles.welcome}>Marhba, Sara Miftah 👋</Text>
        <Text style={styles.text}>Votre session est sécurisée et vous êtes maintenant connecté. ✅</Text>
        <View style={styles.tag}><Text style={styles.tagText}>• Accès Autorisé</Text></View>
      </Card>

      <View style={styles.row}>
        <Card style={styles.smallCard}><Text>🛡️ Sécurité</Text></Card>
        <Card style={styles.smallCard}><Text>⏱️ Historique</Text></Card>
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Se déconnecter" type="danger" onPress={() => router.replace("/(auth)/login")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: COLORS.background },
  header: { alignItems: "center", marginBottom: 15 },
  headerTitle: { fontSize: 20, fontWeight: "700", color: COLORS.primary },
  mainCard: { alignItems: "center", marginBottom: 15 },
  badge: { width: 50, height: 50, borderRadius: 25, backgroundColor: "#E6F4F1", justifyContent: "center", alignItems: "center", marginBottom: 10 },
  badgeText: { fontSize: 22 },
  welcome: { fontSize: 18, fontWeight: "700", color: COLORS.textDark, marginBottom: 5 },
  text: { color: COLORS.textGray, textAlign: "center", fontSize: 13, marginBottom: 15 },
  tag: { backgroundColor: "#DEF7EC", paddingVertical: 4, paddingHorizontal: 12, borderRadius: 20 },
  tagText: { color: "#03543F", fontSize: 12, fontWeight: "600" },
  row: { flexDirection: "row", justifyContent: "space-between" },
  smallCard: { flex: 1, marginHorizontal: 5, alignItems: "center", padding: 15 },
});