import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Profile = () => {
  console.log("Profile screen rendered")
  return (
    <View style={styles.container}>
      <Text>Wallet</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
