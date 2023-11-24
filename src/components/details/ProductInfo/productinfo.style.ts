import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: wp(100),
    gap: 20,
  },
  leftSide: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium),
    color: COLORS.labelDark,
    lineHeight: wp(SIZES.medium) * 1.31,
  },
  rightSide: {
    alignSelf: "flex-end",
  },
  discountView: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    position: "absolute",
    height: 1,
    backgroundColor: COLORS.red,
    alignSelf: "center",
  },
  smallGrayText: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.extraSmall),
    color: COLORS.labelGray1,
  },
  price: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium2),
    color: COLORS.labelDark,
  },
});

export default styles;
