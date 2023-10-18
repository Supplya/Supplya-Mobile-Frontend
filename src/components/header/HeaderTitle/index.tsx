import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const HeaderTitle = () => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: wp(SIZES.medium2),
          color: COLORS.gray,
          marginBottom: 5,
        }}
      >
        Planet Namex 989
      </Text>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: wp(SIZES.extraSmall),
        color: COLORS.gray
      }}>
        Norristown, Pennsylvannia, 19403
      </Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({});
