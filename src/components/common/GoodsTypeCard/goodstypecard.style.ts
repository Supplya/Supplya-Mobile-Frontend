import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: wp(SIZES.small + 5),
    minWidth: 80,
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.small),
  },
});

export default styles;
