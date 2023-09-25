import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS, FONTS, SIZES } from "@const/theme";
import CustomInput from "@comp/CustomInput";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import CustomButton from "@comp/CustomButton";
import { Link, router } from "expo-router";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUp = () => {
  const { handleSubmit, control, reset, watch } = useForm();
  const pwd = watch("password");

  const handleSignUp = (data) => {
    console.log(data);
    Keyboard.dismiss();
    router.push("/home");
  };

  return (
    <View style={{ width: wp("100%") }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.content}
        >
          <View style={styles.titleView}>
            <Text style={styles.title}>Create an Account</Text>
            <Text style={styles.subtitle}>Create a Supplya account</Text>
          </View>
          <View style={styles.form}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                gap: 30,
                // marginVertical: 10,
              }}
            >
              <CustomInput
                title="First name"
                control={control}
                name="firstName"
                rules={{
                  required: " First name is required",
                  minLength: {
                    value: 1,
                    message: "Name is too short",
                  },
                  maxLength: {
                    value: 40,
                    message: "Name is too long",
                  },
                }}
              />
              <CustomInput
                title="Last name"
                control={control}
                name="lastName"
                rules={{
                  required: "First name is required",
                  minLength: {
                    value: 1,
                    message: "Name is too short",
                  },
                  maxLength: {
                    value: 40,
                    message: "Name is too long",
                  },
                }}
              />
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
              title="Phone Number"
              control={control}
              name="phoneNumber"
            />
            <CustomInput
              title="Password"
              control={control}
              name="password"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password is too short",
                },
              }}
            />
            <CustomInput
              title="Confirm Password"
              control={control}
              name="confirmPassword"
              rules={{
                required: "Password is required",
                validate: (value) => value === pwd || "Password does not match",
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
        <StatusBar />
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#FFF",
  //   width: "100%",
  //   height: hp("100%"),
  // },
  content: {
    paddingHorizontal: 24,
    paddingTop: hp("11%"),
    alignItems: "center",
    minHeight: hp("100%")
  },
  titleView: {
    marginVertical: 15,
    alignItems: "center",
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: wp("6.1%"),
    letterSpacing: -0.408,
    lineHeight: wp(SIZES.large) * 0.92,
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: FONTS.medium,
    fontSize: wp(SIZES.medium),
    lineHeight: wp(SIZES.medium) * 0.93,
  },
  form: {
    // backgroundColor: "red"
    width: "100%",
    alignItems: "center",
    marginVertical: 15,
  },
  loginView: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  haveAccountText: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.medium),
    lineHeight: wp(SIZES.medium) * 0.92,
  },
  loginText: {
    fontFamily: FONTS.medium,
    fontSize: wp(SIZES.medium),
    textDecorationLine: "underline",
    textDecorationColor: COLORS.primary,
    color: COLORS.primary,
    lineHeight: wp(SIZES.medium) * 0.92,
  },
});
