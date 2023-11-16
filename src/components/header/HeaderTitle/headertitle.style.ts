import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium),
    color: COLORS.gray,
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.extraSmall),
    color: COLORS.gray,
  },
});

export default styles;
