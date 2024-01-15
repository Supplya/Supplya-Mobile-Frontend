import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import useAuthStore from "store/authStore";
import CustomButton from "@/components/common/CustomButton";
import Camera from "@/components/profile/Camera";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS, SIZES } from "@const/theme";
import { globalStyles } from "styles/global";

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
  return (
    <View style={styles.container}>
      <View
        style={{
          height: hp(35),
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
        <View style={{ gap: 3, alignItems: "center" }}>
          <Text style={{ ...globalStyles.fontBold24 }}>John Doe.</Text>
          <Text style={{ ...globalStyles.fontRegular14, color: COLORS.gray4 }}>
            example@email.com
          </Text>
        </View>
      </View>
      <View>
        <FlatList
          data={buttons}
          renderItem={({ item }) => {
            return <Text>{item.label}</Text>;
          }}
        />
        <TouchableOpacity>
          <View></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
