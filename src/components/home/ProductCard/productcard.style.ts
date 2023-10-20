import { COLORS } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    width: wp("50"),
    marginVertical: 15,
    gap: 5,
    alignItems: "center",
  },
  rectangle: {
    width: "90%",
    aspectRatio: 160 / 176,
    backgroundColor: COLORS.gray2,
    borderRadius: 9,
    marginBottom: 5,
  },
});

export default styles;
