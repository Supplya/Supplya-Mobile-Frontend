import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <Link href="/login" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Login</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/signup" asChild>
        <TouchableOpacity
          style={styles.button}
        >
          <Text>Sign up</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#e3e3e3",
    marginVertical: 10,
  },
});
