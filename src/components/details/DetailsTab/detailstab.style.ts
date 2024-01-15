import { COLORS } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { globalStyles } from "styles/global";

const styles = StyleSheet.create({
  container: {
    width: wp(94),
    padding: 5,
  },
  text: { ...globalStyles.fontRegular16, color: COLORS.gray },
});

export default styles;
