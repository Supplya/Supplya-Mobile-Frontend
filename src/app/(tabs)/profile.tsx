import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import useAuthStore from "store/authStore";
import Camera from "@/components/profile/Camera";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS, SIZES } from "@const/theme";
import { globalStyles } from "styles/global";
import ProfileButton from "@/components/profile/ProfileButton";
import { ButtonProps } from "utils/types";
import { router } from "expo-router";

const Settings = () => {
  const { signOut, user } = useAuthStore();
  const buttons: ButtonProps[] = [
    {
      label: "My Profile",
      onPress: () => router.push("/(account)/my-profile"),
    },
    {
      label: "My Address",
      onPress: () => {},
    },
    {
      label: "Notifications",
      onPress: () => {},
    },
    {
      label: "Security Settings",
      onPress: () => {},
    },
    {
      label: "Help Centre",
      onPress: () => {},
    },
    {
      label: "Log Out",
      onPress: () => signOut(),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.picture}>
          <Camera style={styles.camera} />
        </View>
        <View style={styles.nameView}>
          <Text style={styles.name}>
            {user?.user.firstName} {user?.user.lastName}
          </Text>
          <Text style={styles.email}>{user?.user.email}</Text>
        </View>
      </View>
      <View>
        <View style={styles.buttonContainer}>
          {buttons?.map((item, index) => (
            <ProfileButton
              label={item.label}
              onPress={item.onPress}
              key={index.toString()}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;

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
    textTransform: "capitalize",
  },
  email: {
    ...globalStyles.fontRegular14,
    color: COLORS.gray4,
  },
  buttonContainer: {
    paddingHorizontal: wp(SIZES.medium),
    paddingVertical: wp(SIZES.medium),
    gap: wp(SIZES.medium),
  },
});
