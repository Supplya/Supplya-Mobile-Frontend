import { COLORS } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    width: wp(25),
    alignItems: "center",
  },
  circle: {
    width: wp(25),
    aspectRatio: 1,
    backgroundColor: COLORS.gray2,
    borderRadius: wp(25) / 2,
    marginBottom: 5,
  },
});

export default styles;
