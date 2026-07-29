import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { COLORS } from "@/constants/config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // هنا كدير الـ API call، دابا ندوزو مباشرة لـ app
    router.replace("/(app)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>🔒 Marhba</Text>
      
      <Card>
        <Text style={styles.title}>Bon retour parmi nous</Text>
        <Text style={styles.subtitle}>Veuillez entrer vos identifiants pour continuer.</Text>

        <Input placeholder="nom@exemple.com" value={email} onChangeText={setEmail} />
        <Input placeholder="••••••••" secure value={password} onChangeText={setPassword} />

        <Button title="Se connecter" onPress={handleLogin} />
        <Button title="Créer un compte" type="outline" onPress={() => router.push("/(auth)/register")} />
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