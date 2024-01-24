import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Camera from "@/components/profile/Camera";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS, SIZES } from "@const/theme";
import { globalStyles } from "styles/global";

const MyProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.picture}>
          <Camera style={styles.camera} />
        </View>
        <View style={styles.nameView}>
          <Text style={styles.name}>John Doe.</Text>
          <Text style={styles.email}>example@email.com</Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    paddingTop: hp(8),
    paddingBottom: hp(4),
    backgroundColor: COLORS.white,
    width: wp(100),
    alignItems: "center",
    justifyContent: "center",
    gap: wp(SIZES.medium),
  },
  picture: {
    height: hp(14),
    aspectRatio: 1,
    backgroundColor: COLORS.systemGray,
    borderRadius: hp(14) / 2,
  },
  camera: {
    position: "absolute",
    right: -2,
    bottom: 0,
  },
  nameView: {
    gap: 10,
    alignItems: "center",
  },
  name: {
    ...globalStyles.fontBold24,
  },
  email: {
    ...globalStyles.fontRegular14,
    color: COLORS.gray4,
  },
});
