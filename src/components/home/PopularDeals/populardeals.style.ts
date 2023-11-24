import { SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: wp(SIZES.extraSmall),
    marginHorizontal: wp(SIZES.medium),
  },
});

export default styles;
