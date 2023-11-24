import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
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
import { separateAtWhitespace } from "utils";
import axios, { AxiosRequestConfig } from "axios";
import { DataParams } from "utils/types";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneNumberRegex = /^\d{10}|\d{11}$/;
/^(?:\+\d{13}|\d{11})$/;

const countryCodeRegex = /^\+\d{1,4}$/;

const url = "https://supplya.cyclic.app/api/v1";

const SignUp = () => {
  const { handleSubmit, control, reset, watch } = useForm();
  const pwd = watch("password");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<Record<
    string,
    string
  > | null>(null);
  const [error, setError] = useState("");

  const handleSignUp = async (data: DataParams) => {
    const { firstName, lastName } = separateAtWhitespace(data?.name);

    if (lastName.length <= 4) {
      throw alert("Last Name need to be at least 5 characters long");
    }
    const bodyData = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: "0" + data.phoneNumber,
      email: data.email,
      password: data.password,
      dob: "2022-12-10",
    };

    console.log(bodyData);

    const config: AxiosRequestConfig = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://supplya.cyclic.app/api/v1/auth/register",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer supplyaToken",
      },
      data: bodyData,
    };

    setIsLoading(true);
    axios
      .request(config)
      .then((response) => {
        setResponseData(response.data);
        console.log(
          "🚀 ~ file: index.ts:39 ~ .then ~ response.data:",
          response.data
        );
      })
      .catch((error) => {
        console.error("Axios request error:", error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    Keyboard.dismiss();
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
                validate: (value: string) =>
                  value === pwd || "Password does not match",
              }}
            />
          </View>

          <View>
            <CustomButton
              title="Sign Up"
              onPress={handleSubmit(handleSignUp)}
            />
          </View>
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
