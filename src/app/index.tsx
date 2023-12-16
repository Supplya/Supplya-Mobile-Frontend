import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Page() {
  return (
    <View style={styles.container}>
      <Link href="/login" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Login</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/signup" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/forgotPassword" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Forgot Password</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/welcome" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Welcome</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/home" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Home</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/order-summary" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Order Summary</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/checkout " asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Checkout</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/Details" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Details</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/order-success" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Order Success</Text>
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
