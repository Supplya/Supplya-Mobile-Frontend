import { View } from "react-native"
import { useCallback } from "react"
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    montsRegular: require("assets/fonts/Montserrat-Regular.ttf"),
    montsLight: require("assets/fonts/Montserrat-Light.ttf"),
    montsSemiBold: require("assets/fonts/Montserrat-SemiBold.ttf"),
    montsBold: require("assets/fonts/Montserrat-Bold.ttf"),
    montsExtraBold: require("assets/fonts/Montserrat-ExtraBold.ttf"),
    montsThin: require("assets/fonts/Montserrat-Thin.ttf"),
    montsMedium: require("assets/fonts/Montserrat-Medium.ttf"),
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
    <View style={{width: wp("100%"), minHeight: hp("100%") }} onLayout={onLayoutRootView}>
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
