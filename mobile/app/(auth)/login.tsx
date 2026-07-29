import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { COLORS } from "@/constants/config";
import { useAuth } from "@/store/auth";
import { fakeAuthApi } from "@/services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const res: any = await fakeAuthApi("login", { email, password });
      if (res.success && res.token) {
        await login(res.token, res.user);
      } else {
        setError("Email ou mot de passe incorrect");
      }
    } catch (e) {
      setError("Email ou mot de passe incorrect");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔒 Marhba</Text>

      <Text style={styles.title}>Bon retour parmi nous</Text>
      <Text style={styles.subtitle}>
        Veuillez entrer vos identifiants pour continuer.
      </Text>

      <Card>
        <Text style={styles.label}>Email</Text>
        <Input
          placeholder="nom@exemple.com"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.rowBetween}>
          <Text style={styles.label}>Mot de passe</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Oublié ?</Text>
          </TouchableOpacity>
        </View>
        <Input
          placeholder="••••••••"
          secure
          value={password}
          onChangeText={setPassword}
        />

        {error ? <Text style={styles.errorText}>⚠️ {error}</Text> : null}

        <Button
          title="Se connecter"
          loading={loading}
          onPress={handleLogin}
        />
      </Card>

      <TouchableOpacity
        onPress={() => router.push("/(auth)/register")}
        style={styles.footer}
      >
        <Text style={styles.footerText}>
          Pas encore de compte ? <Text style={styles.link}>S'inscrire</Text>
        </Text>
      </TouchableOpacity>
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
    marginBottom: 15,
    color: COLORS.primary,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: COLORS.textDark,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.textGray,
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.textDark,
    marginBottom: 5,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: { color: COLORS.primary, fontWeight: "600", fontSize: 12 },
  errorText: {
    color: COLORS.error,
    fontSize: 11,
    marginBottom: 15,
    marginTop: -5,
  },
  footer: { marginTop: 20, alignItems: "center" },
  footerText: { fontSize: 12, color: COLORS.textGray },
});