import { COLORS } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: wp(94),
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
    borderRadius: 12,
    backgroundColor: COLORS.tertiaryGray,
    marginBottom: 15,
    gap: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: COLORS.labelDark,
  },
  separator: {
    height: "80%",
    width: 2,
    backgroundColor: COLORS.separatorGray,
  },
});

export default styles;
