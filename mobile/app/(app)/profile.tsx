import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { COLORS } from "@/constants/config";
import { useAuth } from "@/store/auth";

export default function Profile() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔒 Marhba</Text>

      <Card>
        <Text style={styles.title}>Mon Profil</Text>
        <Text style={styles.label}>Nom complet</Text>
        <Text style={styles.value}>
          {user?.name || user?.fullName || "Utilisateur"}
        </Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>
          {user?.email || "utilisateur@email.com"}
        </Text>
      </Card>

      <View style={{ marginTop: 20 }}>
        <Button
          title="Retour à l'accueil"
          type="outline"
          onPress={() => router.push("/(app)")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: COLORS.background,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    color: COLORS.primary,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
    textAlign: "center",
    color: COLORS.textDark,
  },
  label: { fontSize: 12, color: COLORS.textGray, marginTop: 10 },
  value: { fontSize: 15, fontWeight: "600", color: COLORS.textDark },
});