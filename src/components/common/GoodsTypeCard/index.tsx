import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, {memo} from "react";
import { COLORS, FONTS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const GoodsTypeCard = ({ type, selected, setSelected, index }) => {
  // console.log("Goods type rendered")
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderWidth: 1,
          borderColor: selected === index ? COLORS.primary : COLORS.offWhite,
        },
      ]}
      onPress={() => setSelected(index)}
    >
      <Text
        style={[
          styles.text,
          {
            color: selected === index ? COLORS.primary : COLORS.labelDark,
          },
        ]}
      >
        {type}
      </Text>
    </TouchableOpacity>
  );
};

export default GoodsTypeCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: wp(SIZES.small + 5),
    minWidth: 80,
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.small),
  },
});
