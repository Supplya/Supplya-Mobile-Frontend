import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    width: wp(45),
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 10,
  },
  square: {
    alignSelf: "center",
    width: "100%",
    aspectRatio: 152 / 113,
    backgroundColor: COLORS.systemGray,
    borderRadius: 8,
    marginBottom: 5,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium2),
    color: COLORS.dark,
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.extraSmall),
    color: COLORS.gray,
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
