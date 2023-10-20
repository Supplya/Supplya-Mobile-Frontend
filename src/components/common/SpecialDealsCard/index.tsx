import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { COLORS } from "@const/theme";
import styles from "./specialdealscard";

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
