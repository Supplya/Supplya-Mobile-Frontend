import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { COLORS, FONTS } from "@const/theme";

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle} />
      <Text style={{ fontFamily: FONTS.bold, fontSize: 16 }}>Product Name</Text>
      <Text style={{ fontFamily: FONTS.medium, fontSize: 12 }}>10Kg</Text>
      <Text style={{ fontFamily: FONTS.bold, fontSize: 14 }}>N20,000</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: wp("50"),
    marginVertical: 15,
    gap: 5,
    alignItems: "center",
  },
  rectangle: {
    width: "90%",
    aspectRatio: 160 / 176,
    backgroundColor: COLORS.gray2,
    borderRadius: 9,
    marginBottom: 5,
  },
});
