import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { COLORS } from "@/constants/config";
import { useAuth } from "@/store/auth";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🔒 Marhba</Text>
        <TouchableOpacity
          style={styles.avatar}
          onPress={() => router.push("/(app)/profile")}
        >
          <Text>👤</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Card>
          <View style={styles.iconCircle}>
            <Text style={styles.shieldIcon}>🛡️</Text>
          </View>

          <Text style={styles.welcome}>
            Marhba, {user?.name || user?.fullName || "Utilisateur"} 👋
          </Text>
          <Text style={styles.text}>
            Votre session est sécurisée par JWT et vous êtes maintenant
            connecté.
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>• Session JWT Active</Text>
          </View>
        </Card>

        <View style={styles.row}>
          <View style={styles.halfCard}>
            <Text style={styles.cardText}>🛡️ Sécurité</Text>
          </View>
          <View style={styles.halfCard}>
            <Text style={styles.cardText}>⏱️ Historique</Text>
          </View>
        </View>

        <Button
          title="Se déconnecter"
          type="outline"
          onPress={async () => {
            await logout();
          }}
        />
      </View>

      <View style={styles.bottomNav}>
        <View style={styles.activeNav}>
          <Text style={styles.activeNavText}>🏠</Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/(app)/profile")}>
          <Text style={styles.navText}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  headerTitle: { fontSize: 18, fontWeight: "700", color: COLORS.primary },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },
  content: { padding: 20, flex: 1, justifyContent: "center" },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E6F4F1",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 12,
  },
  shieldIcon: { fontSize: 22 },
  welcome: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    color: COLORS.textDark,
    marginBottom: 6,
  },
  text: {
    color: COLORS.textGray,
    textAlign: "center",
    fontSize: 12,
    marginBottom: 15,
  },
  badge: {
    backgroundColor: "#DEF7EC",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 15,
    alignSelf: "center",
  },
  badgeText: { color: "#03543F", fontSize: 11, fontWeight: "600" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  halfCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginHorizontal: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 2,
  },
  cardText: { fontWeight: "600", fontSize: 13, color: COLORS.textDark },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  activeNav: {
    backgroundColor: COLORS.primary,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  activeNavText: { fontSize: 16, color: "#fff" },
  navText: { fontSize: 18, paddingVertical: 6 },
});