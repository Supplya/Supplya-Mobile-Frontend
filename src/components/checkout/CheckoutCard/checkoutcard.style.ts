import { COLORS, SIZES } from "@const/theme";
import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { globalStyles } from "styles/global";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: wp(SIZES.medium / 2),
    backgroundColor: COLORS.white,
    gap: 8,
    borderRadius: 8,
    elevation: 1,
  },
  image: {
    width: hp(14.1),
    aspectRatio: 104 / 75,
    backgroundColor: COLORS.systemGray,
    borderRadius: 8,
  },
  titleView: {
    flex: 1,
    gap: 8,
  },
  title: {
    ...globalStyles.fontBold16,
  },
  size: {
    ...globalStyles.fontRegular12,
    color: COLORS.gray,
  },
  price: {
    alignSelf: "flex-end",
    ...globalStyles.fontBold20,
  },
});

export default styles;
