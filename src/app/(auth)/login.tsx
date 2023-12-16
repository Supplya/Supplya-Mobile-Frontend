import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator,
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
import useAuthStore from "store/authStore";

const phoneOrEmailRegex =
  /^(\+234|0)[789]\d{9}$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Login = () => {
  const { handleSubmit, control, reset } = useForm();
  const { signIn, isLoading } = useAuthStore();
  console.log("🚀 ~ file: login.tsx:32 ~ Login ~ isLoading:", isLoading);

  const handleLogin = async (data) => {
    console.log(data);
    signIn(data);
    Keyboard.dismiss();
    router.push("/home");
  };

  return (
    <View style={styles.container}>
      <Modal visible={isLoading} transparent>
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      </Modal>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps={"handled"}
        >
          <View style={styles.titleView}>
            <Text style={styles.title}>Log In to Continue!</Text>
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
          <View style={{ width: "100%" }}>
            <CustomInput
              title="Email / Phone"
              control={control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: phoneOrEmailRegex,
                  message: "Email or Phone number is invalid",
                },
              }}
            />

            <CustomInput
              title="Password"
              control={control}
              type="password"
              name="password"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password is too short",
                },
              }}
            />
          </View>
          {/* Forgot Password button */}
          <Link href="/forgotPassword" asChild>
            <Pressable style={{ alignSelf: "flex-end", marginBottom: 15 }}>
              <Text style={styles.pressable}>Forgot your password?</Text>
            </Pressable>
          </Link>
          <CustomButton title="Login" onPress={handleSubmit(handleLogin)} />
          <View
            style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 50 }}
          >
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
        <StatusBar backgroundColor={COLORS.white} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    backgroundColor: COLORS.white,
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    color: COLORS.primary,
  },
});
