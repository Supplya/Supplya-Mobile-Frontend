import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const globalStyles = StyleSheet.create({
  headerFont: {
    fontFamily: FONTS.semiBold,
    fontSize: wp(SIZES.medium),
    color: COLORS.dark2,
  },
  fontRegular12: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.extraSmall),
    color: COLORS.dark2,
  },
  fontRegular14: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.small),
    color: COLORS.dark2,
  },
  fontRegular16: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.medium),
    color: COLORS.dark2,
  },
  fontMedium12: {
    fontFamily: FONTS.medium,
    fontSize: wp(SIZES.extraSmall),
    color: COLORS.dark2,
  },
  fontMedium16: {
    fontFamily: FONTS.medium,
    fontSize: wp(SIZES.medium),
    color: COLORS.dark2,
  },
  fontSemiBold14: {
    fontFamily: FONTS.semiBold,
    fontSize: wp(SIZES.small),
    color: COLORS.dark2,
  },
  fontSemiBold16: {
    fontFamily: FONTS.semiBold,
    fontSize: wp(SIZES.medium),
    color: COLORS.dark2,
  },
  fontSemiBold24: {
    fontFamily: FONTS.semiBold,
    fontSize: wp(SIZES.large),
    color: COLORS.dark2,
  },
  fontBold14: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.small),
    color: COLORS.dark2,
  },
  fontBold16: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium),
    color: COLORS.dark2,
  },

  fontBold20: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium2),
    color: COLORS.dark2,
  },
  fontBold24: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.large),
    color: COLORS.dark2,
  },
});
