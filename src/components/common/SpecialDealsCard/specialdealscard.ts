import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: "hidden",
  },
  background: {
    aspectRatio: 253 / 136,
    justifyContent: "flex-end",
    padding: 20,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium3),
    color: COLORS.white,
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.small),
    color: COLORS.white,
  },
});

export default styles;
