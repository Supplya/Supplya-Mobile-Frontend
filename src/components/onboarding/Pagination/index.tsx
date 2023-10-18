import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";

const Pagination = ({ data, scrollX, index,}) => {
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: wp("100%"),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    zIndex: 3,
  },
  dotView: {
    flexDirection: "row",
    gap: 5,
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: wp(SIZES.medium),
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },
});
