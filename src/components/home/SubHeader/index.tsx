import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const SubHeader = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: wp(SIZES.medium3),
        }}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: wp(SIZES.medium2),
            color: COLORS.primary,
            lineHeight: wp(SIZES.medium2 * 1.29412),
          }}
        >
          See All
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
});
