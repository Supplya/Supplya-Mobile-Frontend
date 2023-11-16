import { Text, View } from "react-native";
import { Stack, router } from "expo-router";
import BackButton from "@/components/header/BackButton";
import { COLORS, FONTS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Search from "@/components/common/Search";
import { globalStyles } from "styles/global";

export default function MoreLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerLeft: () => <BackButton onPress={router.back} />,
        headerShadowVisible: false,
        headerStyle: { backgroundColor: COLORS.offWhite },
        headerRight: () => <Search />,
        headerTitleStyle: {
          ...globalStyles.headerFont,
        },
      }}
    >
      <Stack.Screen
        name="special-deals"
        options={{
          title: "Special Deals for You",
        }}
      />
      <Stack.Screen
        name="categories"
        options={{
          title: "Categories",
        }}
      />
      <Stack.Screen
        name="popular-deals"
        options={{
          title: "Popular Deals",
        }}
      />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
