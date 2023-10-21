import { COLORS } from "@const/theme";
import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { globalStyles } from "styles/global";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: hp(13),
    borderRadius: 8,
    padding: 8,
    backgroundColor: COLORS.white,
  },
  square: {
    height: "100%",
    aspectRatio: 1,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: COLORS.systemGray,
  },
  detailView: {
    flex: 1,
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  name: {
    ...globalStyles.fontBold16,
    color: COLORS.labelDark,
  },
  size: {
    ...globalStyles.fontRegular12,
    color: COLORS.labelGray1,
  },
  price: {
    ...globalStyles.fontBold20,
  },
  picker: {
    height: "100%",
    justifyContent: "flex-end",
  },
});

export default styles;
