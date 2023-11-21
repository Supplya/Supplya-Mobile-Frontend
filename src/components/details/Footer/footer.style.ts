import { COLORS } from "@const/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
    paddingHorizontal: 15,
  },
  cartButton: {
    height: "100%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: COLORS.primary,
  },
});

export default styles;
