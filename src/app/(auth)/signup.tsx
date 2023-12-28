import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS, FONTS, SIZES } from "@const/theme";
import CustomInput from "@/components/common/CustomInput";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/common/CustomButton";
import { Link } from "expo-router";
import { separateAtWhitespace } from "utils";
import { DataParams } from "utils/types";
import useAuthStore from "store/authStore";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneNumberRegex = /^\d{10}|\d{11}$/;
/^(?:\+\d{13}|\d{11})$/;

const countryCodeRegex = /^\+\d{1,4}$/;

const url = "https://supplya.cyclic.app/api/v1";

const SignUp = () => {
  const { handleSubmit, control, reset, watch } = useForm();
  const pwd = watch("password");

  const { signUp, isLoading } = useAuthStore();

  const [error, setError] = useState("");

  const [date, setDate] = useState<Date>();

  const handleSignUp = async (data: DataParams) => {
    const { firstName, lastName } = separateAtWhitespace(data?.name);

    if (lastName.length <= 4) {
      throw alert("Last Name need to be at least 5 characters long");
    }
    if (!date) {
      return setError("Date of Birth is required");
    }
    const bodyData = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: "0" + data.phoneNumber,
      email: data.email,
      password: data.password,
      dob: date?.toLocaleDateString("en-CA"),
    };

    signUp(bodyData);
    Keyboard.dismiss();
  };

  const openDatePicker = () => {
    DateTimePickerAndroid.open({
      mode: "date",
      value: new Date(),
      onChange: handleDateChange,
      maximumDate: new Date(),
      minimumDate: new Date(1920, 1, 1),
    });
  };

  const handleDateChange = (event: DateTimePickerEvent, selectedDate: Date) => {
    console.log(event);
    setDate(selectedDate);
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <View
          style={{
            position: "absolute",
            width: wp(100),
            height: hp(100),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
        >
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.content}
        >
          <View style={styles.titleView}>
            <Text style={styles.title}>Sign Up to Continue!</Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <CustomButton
              title="Login with Facebook"
              onPress={() => {}}
              secondary
            />
          </View>
          <View style={{ marginVertical: 5 }}>
            <CustomButton
              title="Login with Google"
              onPress={() => {}}
              secondary
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <View style={styles.line} />
            <Text
              style={{
                fontFamily: FONTS.medium,
                marginHorizontal: 10,
                color: COLORS.gray4,
              }}
            >
              OR
            </Text>
            <View style={styles.line} />
          </View>
          <View style={styles.form}>
            <CustomInput
              title="Your Name"
              control={control}
              name="name"
              pairInput
              rules={{
                required: "This field is required",
                minLength: {
                  value: 1,
                  message: "Name is too short",
                },
                maxLength: {
                  value: 30,
                  message: "Name is too long",
                },
              }}
            />
            <View style={styles.phoneNumberView}>
              <TouchableOpacity style={styles.countryCode}>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    color: COLORS.gray4,
                    fontSize: wp(SIZES.medium),
                    paddingVertical: 19,
                  }}
                >
                  +234
                </Text>
                <Ionicons
                  name="chevron-down"
                  size={wp(SIZES.medium)}
                  color={COLORS.gray4}
                />
              </TouchableOpacity>
              <CustomInput
                title="Phone Number"
                control={control}
                name="phoneNumber"
                type="phoneNumber"
                pairInput
                flex={1}
                rules={{
                  required: "Phone number is required",
                  pattern: {
                    value: phoneNumberRegex,
                    message: "Phone number is invalid",
                  },
                }}
              />
            </View>
            <View
              style={{
                marginBottom: 15,
                alignItems: "flex-start",
                alignSelf: "flex-start",
              }}
            >
              <TouchableOpacity
                style={[
                  styles.datepicker,
                  { borderColor: error ? COLORS.systemRed : COLORS.gray4 },
                ]}
                onPress={openDatePicker}
              >
                <Text
                  style={[
                    styles.dobText,
                    { color: date ? COLORS.dark : COLORS.gray4 },
                  ]}
                >
                  {date ? date?.toLocaleDateString("en-CA") : "Select DOB"}
                </Text>
                <Ionicons
                  name="calendar-outline"
                  size={24}
                  color={COLORS.gray4}
                />
              </TouchableOpacity>
              {error && <Text style={styles.error}>{error}</Text>}
            </View>

            <CustomInput
              title="Email Address"
              control={control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "Email address is invalid",
                },
              }}
            />
            <CustomInput
              title="Password"
              control={control}
              name="password"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password is too short",
                },
              }}
              type="password"
            />
            <CustomInput
              title="Confirm Password"
              control={control}
              name="confirmPassword"
              type="password"
              rules={{
                required: "Password is required",
                validate: (value: string) =>
                  value === pwd || "Password does not match",
              }}
            />
          </View>

          <CustomButton title="Sign Up" onPress={handleSubmit(handleSignUp)} />
          <View style={styles.loginView}>
            <Text style={styles.haveAccountText}>Already have an account?</Text>
            <Link href="/login" asChild>
              <Pressable style={{ margin: 5 }}>
                <Text style={styles.loginText}>Log in</Text>
              </Pressable>
            </Link>
          </View>
        </ScrollView>
        <StatusBar translucent={false} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    backgroundColor: COLORS.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: hp("10%"),
    minHeight: hp("100%"),
  },
  titleView: {
    alignItems: "flex-start",
    marginBottom: 40,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: wp("6.1%"),
    letterSpacing: -0.408,
    marginBottom: 5,
  },
  line: {
    flex: 1,
    backgroundColor: COLORS.graySeparator1,
    width: "100%",
    height: 2,
  },
  form: {
    // backgroundColor: "red"
    width: "100%",
    alignItems: "center",
    marginVertical: 15,
  },
  phoneNumberView: {
    flexDirection: "row",
    width: "100%",
    gap: 15,
  },
  countryCode: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    flex: 0.3,
    borderColor: COLORS.gray4,
    marginBottom: 15,
    borderRadius: 8,
    gap: 5,
    alignSelf: "flex-start",
  },
  datepicker: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: COLORS.gray4,
    paddingHorizontal: 8,
    paddingVertical: 7,
    gap: 8,
  },
  error: {
    alignSelf: "flex-start",
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.small),
    color: COLORS.orange,
  },
  dobText: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.small),
  },
  loginView: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
  haveAccountText: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.medium),
  },
  loginText: {
    fontFamily: FONTS.medium,
    fontSize: wp(SIZES.medium),
    textDecorationLine: "underline",
    textDecorationColor: COLORS.primary,
    color: COLORS.primary,
  },
});
