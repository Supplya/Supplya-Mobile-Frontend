import { Stack, router } from "expo-router";
import BackButton from "@/components/header/BackButton";
import { COLORS } from "@const/theme";
import Search from "@/components/common/Search";
import { globalStyles } from "styles/global";

export default function MoreLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerLeft: () => <BackButton onPress={router.back} />,
        headerShadowVisible: false,
        headerBackVisible: false,
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
      <Stack.Screen
        name="[id]"
        options={{
          title: "",
        }}
      />
    </Stack>
  );
}
