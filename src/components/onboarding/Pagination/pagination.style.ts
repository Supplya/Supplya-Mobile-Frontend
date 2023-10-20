import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

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

export default styles;
