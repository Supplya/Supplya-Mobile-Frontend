import { View } from "react-native";
import { useCallback, useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import useCartStore from "store/cartStore";
import useAuthStore from "store/authStore";
import AuthUser from "context/authContext";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    nunitoLight: require("assets/fonts/Nunito-Light.ttf"),
    nunitoExtraLight: require("assets/fonts/Nunito-ExtraLight.ttf"),
    nunitoRegular: require("assets/fonts/Nunito-Regular.ttf"),
    nunitoMedium: require("assets/fonts/Nunito-Medium.ttf"),
    nunitoSemiBold: require("assets/fonts/Nunito-SemiBold.ttf"),
    nunitoBold: require("assets/fonts/Nunito-Bold.ttf"),
    nunitoExtraBold: require("assets/fonts/Nunito-ExtraBold.ttf"),
    nunitoBlack: require("assets/fonts/Nunito-Black.ttf"),
  });

  const { getCartItem } = useCartStore();
  const { getUserData } = useAuthStore();

  useEffect(() => {
    getCartItem();
    getUserData();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AuthUser>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            headerTitle: "",
            headerShown: false,
            statusBarStyle: "dark",
            statusBarTranslucent: true,
          }}
        />
      </AuthUser>
    </View>
  );
}
