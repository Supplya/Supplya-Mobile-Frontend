import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "@const/theme";
import styles from "./goodstypecard.style";

const GoodsTypeCard = ({ type, selected, setSelected, index }) => {
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
