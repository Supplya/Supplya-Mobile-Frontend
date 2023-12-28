import CustomHeader from "@/components/header/CustomHeader";
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
              case "home":
                return (
                  <HomeIcon color={focused ? COLORS.primary : COLORS.gray4} />
                );
              case "favorite":
                return (
                  <FavoriteIcon
                    color={focused ? COLORS.primary : COLORS.gray4}
                  />
                );
              case "cart":
                return (
                  <CartIcon color={focused ? COLORS.primary : COLORS.gray4} />
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
          tabBarLabelStyle: {
            fontFamily: FONTS.regular,
            bottom: 3,
            fontSize: wp(SIZES.verySmall),
            textTransform: "capitalize",
          },
        })}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tabs.Screen
          name="home"
          options={{
            header: (props) => <CustomHeader />,
            headerStyle: { backgroundColor: COLORS.offWhite },
            headerShadowVisible: false,
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            title: "Favorite",
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
        <Tabs.Screen name="cart" />
        <Tabs.Screen name="profile" />
      </Tabs>
    </SafeAreaView>
  );
}
