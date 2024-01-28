import CustomHeader from "@/components/header/CustomHeader";
import WalletIcon from "@/components/svg/WalletIcon";
import Search from "@comp/common/Search";
import BackButton from "@comp/header/BackButton";
import CartIcon from "@comp/tab/CartIcon";
import CustomTabBar from "@comp/tab/CustomTabBar";
import FavoriteIcon from "@comp/tab/FavoriteIcon";
import HomeIcon from "@comp/tab/HomeIcon";
import ProfileIcon from "@comp/tab/ProfileIcon";
import { COLORS, FONTS, SIZES } from "@const/theme";
import { Tabs, router } from "expo-router";
import { View, SafeAreaView } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case "buy":
                return (
                  <HomeIcon color={focused ? COLORS.primary : COLORS.gray4} />
                );
              case "my-shop":
                return (
                  <FavoriteIcon
                    color={focused ? COLORS.primary : COLORS.gray4}
                  />
                );
              case "wallet":
                return (
                  <WalletIcon color={focused ? COLORS.primary : COLORS.gray4} />
                );
              case "profile":
                return (
                  <ProfileIcon
                    color={focused ? COLORS.primary : COLORS.gray4}
                  />
                );
              default:
                return null;
            }
          },

          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray4,
          tabBarStyle: {
            elevation: 0,
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontFamily: FONTS.regular,
            bottom: 3,
            fontSize: wp(SIZES.verySmall),
            textTransform: "capitalize",
          },
        })}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tabs.Screen name="buy" />
        <Tabs.Screen
          name="my-shop"
          options={{
            title: "My Shop",
            headerTitle: "Favorite Item",
            headerTitleAlign: "center",
            headerLeft: () => (
              <View style={{ marginLeft: 16 }}>
                <BackButton onPress={router.back} />
              </View>
            ),
            headerRight: () => <Search style={{ marginRight: 16 }} />,
          }}
        />
        <Tabs.Screen name="wallet" />
        <Tabs.Screen name="profile" options={{ headerShown: false }} />
      </Tabs>
    </SafeAreaView>
  );
}
