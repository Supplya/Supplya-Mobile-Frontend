import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const globalStyles = StyleSheet.create({
  headerFont: {
    fontFamily: FONTS.semiBold,
    fontSize: wp(SIZES.medium2),
    color: COLORS.black,
  },
  fontRegular12: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.extraSmall),
  },
  fontRegular14: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.small),
  },
  fontRegular16: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.medium),
  },
  fontRegular17: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.medium2),
  },
  fontSemiBold14: {
    fontFamily: FONTS.semiBold,
    fontSize: wp(SIZES.small),
  },
  fontSemiBold17: {
    fontFamily: FONTS.semiBold,
    fontSize: wp(SIZES.medium2),
  },
  fontBold16: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium),
  },
  fontBold17: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium2),
  },
  fontBold20: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium3),
  },
});
