import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./pagination.style";

const Pagination = ({ data, scrollX, index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dotView}>
        {data.map((dot, index) => {
          const inputRange = [
            (index - 1) * wp("100%"),
            index * wp("100%"),
            (index + 1) * wp("100%"),
          ];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 32, 8],
            extrapolate: "clamp",
          });
          const dotColor = scrollX.interpolate({
            inputRange,
            outputRange: [COLORS.gray, COLORS.primary, COLORS.gray],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              style={[
                styles.dot,
                { width: dotWidth, backgroundColor: dotColor },
              ]}
              key={dot.id}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Pagination;
