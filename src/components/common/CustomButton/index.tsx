import { Text, TouchableOpacity, DimensionValue } from "react-native";
import React from "react";
import { COLORS } from "@const/theme";
import styles from "./custombutton.style";

type CustomButtonProps = {
  title: string;
  staticWidth?: string | number;
  onPress: () => void;
  secondary?: boolean;
  tertiary?: boolean;
  dynamicWidth?: DimensionValue;
};

const CustomButton = ({
  title,
  secondary,
  tertiary,
  onPress,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: secondary
            ? COLORS.lightGreen
            : tertiary
            ? COLORS.white
            : COLORS.primary,
          borderWidth: tertiary ? 1 : 0,
          borderColor: tertiary ? COLORS.primary : "transparent",
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          secondary
            ? {
                alignSelf: "flex-start",
                paddingLeft: 16,
                color: COLORS.primary,
              }
            : tertiary
            ? {
                color: COLORS.primary,
              }
            : {},
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
