import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import useAuthStore from "store/authStore";
import CustomButton from "@/components/common/CustomButton";
import Camera from "@/components/profile/Camera";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS, SIZES } from "@const/theme";
import { globalStyles } from "styles/global";
import Security from "@svg/Security";
import ProfileIcon from "@/components/tab/ProfileIcon";
import Address from "@svg/Address";
import Notification from "@/components/svg/Notification";
import Help from "@svg/Help";
import Logout from "@svg/Logout";
import ChevronRight from "@svg/ChevronRight";

interface ButtonProps {
  label: string;
  onPress: () => void;
}
const Profile = () => {
  const { signOut } = useAuthStore();
  const buttons: ButtonProps[] = [
    {
      label: "My Profile",
      onPress: () => {},
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
    <ScrollView style={styles.container}>
      <View
        style={{
          paddingTop: hp(8),
          paddingBottom: hp(4),
          backgroundColor: COLORS.white,
          width: wp(100),
          alignItems: "center",
          justifyContent: "center",
          gap: wp(SIZES.medium),
        }}
      >
        <View
          style={{
            height: hp(14),
            aspectRatio: 1,
            backgroundColor: COLORS.systemGray,
            borderRadius: hp(14) / 2,
          }}
        >
          <Camera style={{ position: "absolute", right: -2, bottom: 0 }} />
        </View>
        <View style={{ gap: 10, alignItems: "center" }}>
          <Text style={{ ...globalStyles.fontBold24 }}>John Doe.</Text>
          <Text style={{ ...globalStyles.fontRegular14, color: COLORS.gray4 }}>
            example@email.com
          </Text>
        </View>
      </View>
      <View>
        {/* <FlatList
          data={buttons}
          style={{ width: wp(100) }}
          contentContainerStyle={{
          }}
          renderItem={({ item }) => {
            return (
               */}
        <View
          style={{
            paddingHorizontal: wp(SIZES.medium),
            paddingVertical: wp(SIZES.medium),
            gap: wp(SIZES.medium),
          }}
        >
          {buttons.map((item) => (
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
              onPress={item.onPress}
            >
              <View
                style={{
                  padding: 10,
                  borderRadius: 5,
                  backgroundColor: COLORS.lightGreen,
                }}
              >
                {getIcon(item.label)}
              </View>
              <Text
                style={{
                  flex: 1,
                  ...globalStyles.fontBold16,
                }}
                ellipsizeMode="tail"
              >
                {item.label}
              </Text>
              <ChevronRight />
            </TouchableOpacity>
          ))}
        </View>
        {/* );
          }}
        /> */}
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
