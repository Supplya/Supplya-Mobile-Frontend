import { View } from "react-native";
import { useCallback } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

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
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerTitle: "",
          headerShown: false,
        }}
      />
    </View>
  );
}
