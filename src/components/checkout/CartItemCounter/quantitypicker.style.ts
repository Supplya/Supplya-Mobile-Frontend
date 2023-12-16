import { COLORS } from "@const/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    padding: 8.7, // padding: wp(2.2)
    backgroundColor: COLORS.systemGray,
    borderRadius: 8.7,
    elevation: 1,
  },
});

export default styles;
