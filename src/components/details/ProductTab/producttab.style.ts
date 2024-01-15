import { COLORS } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
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
    elevation: 5,
    backgroundColor: COLORS.white,
  },
  text: {
    color: COLORS.labelDark,
  },
  separator: {
    height: "80%",
    width: 2,
    backgroundColor: COLORS.gray4,
  },
});

export default styles;
