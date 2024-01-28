import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Wallet = () => {
  console.log("Wallet screen rendered");
  return (
    <View style={styles.container}>
      <Text>Sell</Text>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
