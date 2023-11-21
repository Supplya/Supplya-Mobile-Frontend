import { COLORS } from "@const/theme";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { globalStyles } from "styles/global";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    backgroundColor: COLORS.white,
    gap: 8,
  },
  image: {
    width: wp(28),
    aspectRatio: 1.39,
    backgroundColor: COLORS.systemGray,
    borderRadius: 8,
  },
  nameView: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  name: {
    ...globalStyles.fontBold16,
    color: COLORS.dark2,
  },
  size: {
    ...globalStyles.fontRegular12,
    color: COLORS.gray,
  },
  priceView: {
    justifyContent: "flex-end",
    gap: 5,
  },
  slashedPrice: {
    ...globalStyles.fontRegular12,
    color: COLORS.gray,
  },
  price: {
    ...globalStyles.fontBold20,
    color: COLORS.dark2,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 16,
    marginVertical: 16,
  },
});

export default styles;
