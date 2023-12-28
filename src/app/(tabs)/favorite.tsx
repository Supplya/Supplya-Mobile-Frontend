import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import FavoriteCard from "@comp/favorite/FavoriteCard";
import { COLORS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Favorite = () => {
  console.log("Favourite screen rendered");
  const data = ["1", "2", "3"];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => <FavoriteCard />}
      />
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.offWhite,
    justifyContent: "center",
  },
  content: {
    padding: wp(SIZES.medium),
    paddingBottom: 100,
  },
});
