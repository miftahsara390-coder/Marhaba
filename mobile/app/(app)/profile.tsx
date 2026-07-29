import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { COLORS } from "@/constants/config"; 
export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Profil</Text>
      <Card>
        <Text style={styles.label}>Nom:</Text>
        <Text style={styles.value}>Sara Miftah</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>sara@exemple.com</Text>
      </Card>

      <View style={{ marginTop: 20 }}>
        <Button title="Retour à l'accueil" type="outline" onPress={() => router.push("/(app)")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: COLORS.background },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 20, textAlign: "center", color: COLORS.textDark },
  label: { fontSize: 12, color: COLORS.textGray, marginTop: 10 },
  value: { fontSize: 16, fontWeight: "600", color: COLORS.textDark },
});