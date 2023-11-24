import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const globalStyles = StyleSheet.create({
  headerFont: {
    fontFamily: FONTS.semiBold,
    fontSize: wp(SIZES.medium),
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
  fontMedium12: {
    fontFamily: FONTS.medium,
    fontSize: wp(SIZES.extraSmall),
  },
  fontSemiBold14: {
    fontFamily: FONTS.semiBold,
    fontSize: wp(SIZES.small),
  },
  fontSemiBold16: {
    fontFamily: FONTS.semiBold,
    fontSize: wp(SIZES.medium),
  },
  fontBold14: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.small),
  },
  fontBold16: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium),
  },

  fontBold20: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium2),
  },
});
