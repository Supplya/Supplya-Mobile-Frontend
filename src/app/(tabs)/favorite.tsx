import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import FavoriteCard from "@comp/favorite/FavoriteCard";

const Favorite = () => {
  console.log("Favourite screen rendered");
  const data = ["1", "2", "3"];
  return (
    <View style={styles.container}>
      <Stack.Screen />
      <FlatList data={data} renderItem={({ item }) => <FavoriteCard />} />
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
