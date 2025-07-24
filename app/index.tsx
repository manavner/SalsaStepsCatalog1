import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to Salsa Steps Catalog</Text>
        <Text style={styles.creator}>by Avner Man</Text>
        <Text style={styles.subtitle}>
          Your ultimate guide to learning salsa steps
        </Text>
        <Link href="/(tabs)/steps" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Browse Steps</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/legal" asChild>
          <TouchableOpacity style={[styles.button, styles.legalButton]}>
            <Text style={styles.buttonText}>Legal Info</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 5,
  },
  creator: {
    fontSize: 16,
    color: "#b3b3b3",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#b3b3b3",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#1DB954",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 250,
    alignItems: "center",
  },
  legalButton: {
    backgroundColor: "#6c757d",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
