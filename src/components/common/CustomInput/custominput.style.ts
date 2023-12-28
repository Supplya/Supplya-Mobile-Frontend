import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 15,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: COLORS.gray4,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.medium),
    flex: 1,
  },
  error: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.small),
    color: COLORS.orange,
  },
});

export default styles;
