import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Divider from "../Divider";
import { COLORS, FONTS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import DiscountTag from "../DiscountTag";

const FeaturedCard = ({ index, setSelected, selected }) => {
  return (
    <Pressable
      style={[styles.container, selected === index && { elevation: 100 }]}
      onPress={() => setSelected(index)}
    >
      <View style={styles.square} />
      <View style={styles.description}>
        <DiscountTag />
        <Text style={styles.name}>Dragon Fruit</Text>
        <Text style={styles.size}>200 gr</Text>
      </View>
      <View style={styles.priceView}>
        <>
          <Text style={styles.discount}>$90</Text>
          <Divider />
        </>
        <Text style={styles.price}>$45</Text>
      </View>
    </Pressable>
  );
};

export default FeaturedCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: COLORS.white,
    padding: 8,
    width: wp(95),
    height: wp(25),
    borderRadius: 8,
  },
  square: {
    height: "100%",
    aspectRatio: 104 / 75,
    borderRadius: 8,
    backgroundColor: COLORS.systemGray,
  },
  description: {
    flex: 0.8,
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginLeft: 8,
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium),
    color: COLORS.labelDark,
    marginBottom: 5,
  },
  size: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.extraSmall),
    color: COLORS.labelGray1,
  },
  priceView: {
    flex: 0.2,
    alignItems: "flex-end",
  },
  discount: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.extraSmall),
    color: COLORS.labelGray1,
    marginBottom: 5,
  },
  price: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium3),
  },
});
