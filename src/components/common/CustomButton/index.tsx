import { Text, TouchableOpacity, DimensionValue } from "react-native";
import React from "react";
import { COLORS } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import styles from "./custombutton.style";

type CustomButtonProps = {
  title: string;
  staticWidth?: string | number;
  onPress: () => void;
  secondary?: boolean;
  dynamicWidth?: DimensionValue;
};

const CustomButton = ({
  title,
  secondary,
  onPress,
  staticWidth,
  dynamicWidth,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: secondary ? COLORS.lightGreen : COLORS.primary,
        },
        dynamicWidth && { width: dynamicWidth },
        staticWidth && { width: wp(staticWidth) },
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
