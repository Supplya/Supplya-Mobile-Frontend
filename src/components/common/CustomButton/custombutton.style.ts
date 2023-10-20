import { COLORS } from "@const/theme";
import { StyleSheet } from "react-native";
import { globalStyles } from "styles/global";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  text: {
    ...globalStyles.fontSemiBold17,
    color: COLORS.white,
  },
});

export default styles;
