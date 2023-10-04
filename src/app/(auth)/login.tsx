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

const phoneOrEmailRegex =
  /^(\+234|0)[789]\d{9}$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Login = () => {
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
        behavior={Platform.OS === "ios" ? "height" : "padding"}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Please Login</Text>
            <Text style={styles.subtitle}>to your Supplya account</Text>
          </View>
          <View style={{ flex: 1, width: "100%" }}>
            <CustomInput
              title="Email / Phone"
              control={control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: phoneOrEmailRegex,
                  message: "Email  or Phone number is invalid",
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
            />
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: hp("10%"),
            }}
          >
            <CustomButton title="Login" onPress={handleSubmit(handleSignUp)} />
            <View style={styles.row}>
              <Text style={styles.text}>Forgot your password?</Text>
              <Link href="/forgotPassword" asChild>
                <Pressable style={{ margin: 5 }}>
                  <Text style={styles.pressable}>Reset password</Text>
                </Pressable>
              </Link>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Don't have an account yet?</Text>
              <Link href="/signup" asChild>
                <Pressable style={{ margin: 5 }}>
                  <Text
                    style={[
                      styles.pressable,
                      {
                        textDecorationLine: "underline",
                        textDecorationColor: COLORS.primary,
                      },
                    ]}
                  >
                    Sign up
                  </Text>
                </Pressable>
              </Link>
            </View>
          </View>
        </ScrollView>
        <StatusBar translucent={false} backgroundColor={COLORS.white} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    backgroundColor: COLORS.white,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: hp("10%"),
    alignItems: "center",
    minHeight: hp("100%"),
  },
  titleView: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: wp("6.1%"),
    letterSpacing: -0.408,
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: FONTS.medium,
    fontSize: wp(SIZES.medium),
  },
  row: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.medium),
  },
  pressable: {
    fontFamily: FONTS.medium,
    fontSize: wp(SIZES.medium),
    color: COLORS.dark,
  },
});
