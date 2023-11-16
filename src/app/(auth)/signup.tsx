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
import CustomInput from "@/components/common/CustomInput";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/common/CustomButton";
import { Link, router } from "expo-router";
import Pagination from "@/components/onboarding/Pagination";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneNumberRegex = /^\d{10}|\d{11}$/;
/^(?:\+\d{13}|\d{11})$/;

const countryCodeRegex = /^\+\d{1,4}\s\d{1,}$/;

const SignUp = () => {
  const { handleSubmit, control, reset, watch } = useForm();
  const pwd = watch("password");

  const handleSignUp = (data) => {
    console.log(data);
    Keyboard.dismiss();
    router.push("/home");
  };

  return (
    <View style={styles.container}>
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
              name="Name"
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
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                gap: 15,
              }}
            >
              <CustomInput
                title="+234"
                control={control}
                name="countryCode"
                type="countryCode"
                pairInput
                rules={{
                  required: "Country code is required",
                  pattern: {
                    value: countryCodeRegex,
                    message: "Country code is invalid",
                  },
                }}
                flex={0.3}
              />
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
                  value: 8,
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
