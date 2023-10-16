import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { COLORS, FONTS } from "@const/theme";

const CollectionCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text style={{fontFamily: FONTS.medium, fontSize: 16, color: COLORS.dark}} ellipsizeMode="tail" numberOfLines={1}>{item}</Text>
    </View>
  );
};

export default CollectionCard;

const styles = StyleSheet.create({
  container: {
    width: wp(25),
    alignItems: "center",
  },
  circle: {
    width: wp(25),
    aspectRatio: 1,
    backgroundColor: COLORS.gray2,
    borderRadius: wp(25) / 2,
    marginBottom: 5,
  },
});
