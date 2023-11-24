import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    position: "absolute",
    alignSelf: "center",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default styles;
