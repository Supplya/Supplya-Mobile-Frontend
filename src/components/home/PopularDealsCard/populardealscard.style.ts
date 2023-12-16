import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    width: wp(44),
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 10,
    justifyContent: "space-between",
  },
  square: {
    alignSelf: "center",
    width: "100%",
    aspectRatio: 152 / 113,
    backgroundColor: COLORS.systemGray,
    borderRadius: 8,
  },
  title: {
    flex: 1,
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium2),
    color: COLORS.dark,
    marginVertical: 4,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.extraSmall),
    color: COLORS.gray,
    marginVertical: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium2),
  },
  // addedToCart: {
  //   height: 40,
  //   paddingHorizontal: 5
  // },
  plusButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
