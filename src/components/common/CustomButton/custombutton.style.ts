import { COLORS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { globalStyles } from "styles/global";

const styles = StyleSheet.create({
  container: {
    paddingVertical: wp(SIZES.medium),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  text: {
    ...globalStyles.fontSemiBold16,
    color: COLORS.white,
  },
});

export default styles;
