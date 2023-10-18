import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { COLORS, FONTS, SIZES } from "@const/theme";

const SpecialDealsCard = ({ width = 70 }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={[COLORS.systemGray, "#22292E"]}
        style={[styles.background, { width: wp(width) }]}
      >
        <Text style={styles.title}>Fresh Fruit for You</Text>
        <Text style={styles.subtitle}>
          Fresh fruit Everyday we Serve to You
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SpecialDealsCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: "hidden",
  },
  background: {
    aspectRatio: 253 / 136,
    justifyContent: "flex-end",
    padding: 20,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium3),
    color: COLORS.white,
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.small),
    color: COLORS.white,
  },
});
