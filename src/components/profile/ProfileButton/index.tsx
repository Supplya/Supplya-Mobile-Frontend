import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback } from "react";
import { COLORS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ButtonProps } from "utils/types";
import Security from "@svg/Security";
import ProfileIcon from "@/components/tab/ProfileIcon";
import Address from "@svg/Address";
import Notification from "@/components/svg/Notification";
import Help from "@svg/Help";
import Logout from "@svg/Logout";
import ChevronRight from "@svg/ChevronRight";
import { globalStyles } from "styles/global";

const ProfileButton = ({ label, onPress }: ButtonProps) => {
  const getIcon = useCallback((label: string) => {
    switch (label) {
      case "My Profile":
        return <ProfileIcon />;
      case "My Address":
        return <Address />;
      case "Notifications":
        return <Notification />;
      case "Security Settings":
        return <Security />;
      case "Help Centre":
        return <Help />;
      case "Log Out":
        return <Logout />;
    }
  }, []);
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        padding: 10,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        alignItems: "center",
        gap: wp(SIZES.medium),
        width: "100%",
      }}
      onPress={onPress}
    >
      <View
        style={{
          padding: 10,
          borderRadius: 5,
          backgroundColor: COLORS.lightGreen,
        }}
      >
        {getIcon(label)}
      </View>
      <Text
        style={{
          flex: 1,
          ...globalStyles.fontBold16,
        }}
        ellipsizeMode="tail"
      >
        {label}
      </Text>
      <ChevronRight />
    </TouchableOpacity>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({});
