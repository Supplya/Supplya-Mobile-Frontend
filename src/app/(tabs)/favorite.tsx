import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Favorite = () => {
  console.log("Favourite screen rendered")
  return (
    <View style={styles.container}>
      <Text>More</Text>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
