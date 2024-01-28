import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import Camera from "@/components/profile/Camera";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS, SIZES } from "@const/theme";
import { globalStyles } from "styles/global";
import useAuthStore from "store/authStore";

const MyProfile = () => {
  const { user } = useAuthStore();
  const date = new Date(user.user.dob);
  console.log("🚀 ~ MyProfile ~ date:", date.toLocaleDateString("en-CA"));
  const combinedName = `${user?.user.firstName} ${user?.user.lastName}`;
  const [fullName, setFullName] = useState(combinedName);
  const [DOB, setDOB] = useState("29 July 2090");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState(user.user.email || "email@example.com");
  const [phoneNo, setPhoneNo] = useState(user.user.phoneNumber);

  const handleNameChange = useCallback(
    (value: string) => setFullName(value),
    []
  );
  const handleDOBChange = useCallback((value: string) => setDOB(value), []);
  const handleGenderChange = useCallback(
    (value: string) => setGender(value),
    []
  );
  const handleEmailChange = useCallback((value: string) => setEmail(value), []);
  const handlePhoneChange = useCallback(
    (value: string) => setPhoneNo(value),
    []
  );
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1 }}>
          <View style={styles.topView}>
            <View style={styles.picture}>
              <Camera style={styles.camera} />
            </View>
            <View style={styles.nameView}>
              <Text style={styles.name}>John Doe.</Text>
              <Text style={styles.email}>example@email.com</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoView}>
              <Text style={styles.infoText}>Full Name</Text>
              <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={handleNameChange}
              />
            </View>
            <View style={styles.infoView}>
              <Text style={styles.infoText}>DOB</Text>
              <TextInput
                style={styles.input}
                value={DOB}
                onChangeText={handleDOBChange}
              />
            </View>
            <View style={styles.infoView}>
              <Text style={styles.infoText}>Gender</Text>
              <TextInput
                style={styles.input}
                value={gender}
                onChangeText={handleGenderChange}
              />
            </View>
            <View style={styles.infoView}>
              <Text style={styles.infoText}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={handleEmailChange}
              />
            </View>
            <View style={styles.infoView}>
              <Text style={styles.infoText}>Phone No.</Text>
              <TextInput
                style={styles.input}
                value={phoneNo}
                onChangeText={handlePhoneChange}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  infoContainer: {
    padding: wp(SIZES.medium),
    gap: wp(SIZES.medium),
  },
  infoView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoText: {
    ...globalStyles.fontBold16,
    color: COLORS.gray4,
  },
  input: {
    ...globalStyles.fontBold16,
  },
});
