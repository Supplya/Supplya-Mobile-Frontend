import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import useAuthStore from "store/authStore";
import CustomButton from "@/components/common/CustomButton";

const Profile = () => {
  const { signOut } = useAuthStore();

  return (
    <View style={styles.container}>
      <View style={{ width: "50%" }}>
        <CustomButton title="Log Out" onPress={signOut} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
