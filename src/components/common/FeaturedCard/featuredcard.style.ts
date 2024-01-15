import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: COLORS.white,
    padding: 8,
    width: wp(95),
    height: wp(25),
    borderRadius: 8,
  },
  square: {
    height: "100%",
    aspectRatio: 104 / 75,
    borderRadius: 8,
    backgroundColor: COLORS.systemGray,
  },
  description: {
    flex: 0.8,
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginLeft: 8,
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium),
    color: COLORS.labelDark,
    marginBottom: 5,
  },
  size: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.extraSmall),
    color: COLORS.gray,
  },
  priceView: {
    flex: 0.2,
    alignItems: "flex-end",
  },
  discount: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.extraSmall),
    color: COLORS.gray,
    marginBottom: 5,
  },
  price: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium2),
  },
});

export default styles;
