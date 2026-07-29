import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { COLORS } from "@/constants/config";
import { useAuth } from "@/store/auth";
import { fakeAuthApi } from "@/services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleRegister = async () => {
    setLoading(true);
    try {
      const res: any = await fakeAuthApi("register", { name, email, password });
      if (res.success && res.token) {
        await login(res.token, res.user);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔒 Marhba</Text>

      <Card>
        <Text style={styles.title}>Créer un compte</Text>
        <Text style={styles.subtitle}>
          Rejoignez-nous pour une expérience sécurisée
        </Text>

        <Text style={styles.label}>Nom complet</Text>
        <Input placeholder="Jean Dupont" value={name} onChangeText={setName} />

        <Text style={styles.label}>Email</Text>
        <Input
          placeholder="exemple@email.com"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Mot de passe</Text>
        <Input
          placeholder="••••••••"
          secure
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.hint}>Minimum 6 caractères</Text>

        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setIsChecked(!isChecked)}
        >
          <View style={[styles.checkbox, isChecked && styles.checkedBox]} />
          <Text style={styles.termsText}>
            J'accepte les <Text style={styles.link}>Conditions d'utilisation</Text>{" "}
            et la <Text style={styles.link}>Politique de confidentialité</Text>.
          </Text>
        </TouchableOpacity>

        <Button
          title="S'inscrire"
          loading={loading}
          onPress={handleRegister}
        />
      </Card>

      <TouchableOpacity onPress={() => router.back()} style={styles.footer}>
        <Text style={styles.footerText}>
          Déjà un compte ? <Text style={styles.link}>Se connecter</Text>
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
  hint: {
    fontSize: 11,
    color: COLORS.textGray,
    marginBottom: 15,
    marginTop: -5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: COLORS.textGray,
    borderRadius: 4,
    marginRight: 10,
  },
  checkedBox: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  termsText: { fontSize: 11, color: COLORS.textGray, flex: 1, lineHeight: 16 },
  link: { color: COLORS.primary, fontWeight: "600" },
  footer: { marginTop: 20, alignItems: "center" },
  footerText: { fontSize: 12, color: COLORS.textGray },
});