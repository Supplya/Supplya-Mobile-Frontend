import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const DiscountTag = () => {
  return (
    <View style={styles.discountTag}>
      <Text style={styles.discountText}>Disc 40%</Text>
    </View>
  );
};

export default DiscountTag;

const styles = StyleSheet.create({
  discountTag: {
    backgroundColor: COLORS.systemRed,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6.53,
    paddingVertical: 2.18,
    borderRadius: 10,
    marginBottom: 8.7,
  },
  discountText: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.extraSmall),
    color: COLORS.white,
  },
});
