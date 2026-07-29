import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { COLORS } from "@/constants/config";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>🔒 Marhba</Text>

      <Card>
        <Text style={styles.title}>Créer un compte</Text>
        <Text style={styles.subtitle}>Rejoignez-nous pour une expérience sécurisée</Text>

        <Input placeholder="Jean Dupont" value={name} onChangeText={setName} />
        <Input placeholder="exemple@email.com" value={email} onChangeText={setEmail} />
        <Input placeholder="••••••••" secure value={password} onChangeText={setPassword} />

        <Button title="S'inscrire" onPress={() => router.replace("/(app)")} />
        <Button title="Se connecter" type="outline" onPress={() => router.back()} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: COLORS.background },
  headerTitle: { fontSize: 20, fontWeight: "700", textAlign: "center", marginBottom: 20, color: COLORS.primary },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 5, textAlign: "center", color: COLORS.textDark },
  subtitle: { fontSize: 13, color: COLORS.textGray, marginBottom: 20, textAlign: "center" },
});