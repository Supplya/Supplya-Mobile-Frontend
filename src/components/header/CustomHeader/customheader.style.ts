import { COLORS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { globalStyles } from "styles/global";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.offWhite,
    height: 85,
    paddingHorizontal: wp(SIZES.medium2),
    alignItems: "flex-end",
  },
  iconView: {
    flexDirection: "row",
    gap: wp(SIZES.medium),
  },
  searchView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    width: "100%",
  },
  button: {
    padding: 5,
  },
  input: {
    flex: 1,
    padding: 1,
    paddingLeft: 8,
    ...globalStyles.fontRegular14,
    lineHeight: 22,
  },
});

export default styles;
