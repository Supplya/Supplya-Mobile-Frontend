import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

type CustomButtonProps = {
  title: string;
  width?: string | number;
  onPress: () => void;
  secondary?: boolean;
};

const CustomButton = ({ title, secondary, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: secondary ? COLORS.lightGreen : COLORS.primary },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          secondary && {
            alignSelf: "flex-start",
            paddingLeft: 16,
            color: COLORS.primary,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 17,
    width: wp("90%"),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  text: {
    fontFamily: FONTS.semiBold,
    fontSize: wp(SIZES.medium2),
    color: COLORS.white,
  },
});
