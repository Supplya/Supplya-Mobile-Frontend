import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 17,
    width: wp("90%"),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  text: {
    fontFamily: FONTS.semiBold,
    fontSize: wp(SIZES.medium2),
    color: COLORS.white,
  },
});

export default styles;
