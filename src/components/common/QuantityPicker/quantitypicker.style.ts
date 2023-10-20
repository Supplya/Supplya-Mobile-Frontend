import { COLORS, FONTS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  countView: {
    paddingHorizontal: 10.88,
    paddingVertical: 8.5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 8.7,
    marginHorizontal: 5,
    borderColor: COLORS.systemGray,
  },

  button: {
    padding: 8.7,
    backgroundColor: COLORS.systemGray,
    borderRadius: 8.7,
  },
});

export default styles;
