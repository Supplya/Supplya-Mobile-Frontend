import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";

const Pagination = ({ data, scrollX, index, lastScreen, nextScreen }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={lastScreen}>
          <Text style={styles.text}>Skip</Text>
        </TouchableOpacity>
        {index !== data.length - 1 && (
          <TouchableOpacity onPress={nextScreen}>
            <Text
              style={[
                styles.text,
                {
                  color: COLORS.primary,
                  textDecorationLine: "underline",
                  textDecorationColor: COLORS.primary,
                },
              ]}
            >
              Next
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.dotView}>
        {data.map((dot, index) => {
          const inputRange = [
            (index - 1) * wp("100%"),
            index * wp("100%"),
            (index + 1) * wp("100%"),
          ];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [6, 24, 6],
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
    position: "absolute",
    bottom: 40,
    width: wp("100%"),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    zIndex: 3,
  },
  buttonView: {
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    justifyContent: "space-between",
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
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
  },
});
