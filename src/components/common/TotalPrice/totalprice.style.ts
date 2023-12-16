import { COLORS } from "@const/theme";
import { StyleSheet } from "react-native";
import { globalStyles } from "styles/global";

const styles = StyleSheet.create({
  totalView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  name: {
    ...globalStyles.fontRegular16,
    color: COLORS.labelGray1,
  },
  price: {
    ...globalStyles.fontBold16,
    color: COLORS.labelDark,
  },
});

export default styles;
