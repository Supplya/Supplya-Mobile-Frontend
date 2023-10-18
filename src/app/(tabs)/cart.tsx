import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Cart = () => {
  console.log("Cart screen rendered")
  return (
    <View style={styles.container}>
      <Text>Sell</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
