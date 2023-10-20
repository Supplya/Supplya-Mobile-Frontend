import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: wp(100),
    height: hp(100),
    alignItems: "center",
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.large),
    color: COLORS.dark,
    letterSpacing: -0.408,
    marginVertical: 20,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    // fontSize: wp(SIZES.medium),
    color: COLORS.gray,
  },
  skipButton: {
    position: "absolute",
    right: 30,
    top: 30,
    zIndex: 3,
  },
  skipText: {
    fontFamily: FONTS.medium,
    fontSize: wp(SIZES.medium),
    marginTop: 30,
  },
});

export default styles;
