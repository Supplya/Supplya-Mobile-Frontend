import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  discountTag: {
    backgroundColor: COLORS.systemRed,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6.53,
    paddingVertical: 2.18,
    borderRadius: 10,
    marginBottom: 8.7,
  },
  discountText: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.extraSmall),
    color: COLORS.white,
  },
});

export default styles;
