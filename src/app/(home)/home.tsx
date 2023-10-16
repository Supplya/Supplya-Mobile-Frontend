import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS } from "@const/theme";
import CollectionCard from "@comp/CollectionCard";
import ProductCard from "@/components/ProductCard";
import { Stack, Tabs } from "expo-router";
import HeaderTitle from "@comp/HeaderTitle";
import Search from "@comp/Search";
import Categories from "@/components/home/Categories";
import SpecialDeals from "@/components/home/SpecialDeals";
import PopularDeals from "@/components/PopularDeals";

const Home = () => {
  const dummyData = ["Groceries", "Drinks", "Personal Care", "Games"];
  return (
    <View style={styles.container}>
      <Tabs.Screen
        options={{
          headerRight: () => <Search />,
          headerTitle: () => <HeaderTitle />,
          href: "/home",
          headerStyle: {backgroundColor: COLORS.offWhite},
          headerShadowVisible: false
        }}
      />
      <ScrollView contentContainerStyle={{paddingTop: 20}}>
        <Categories />
        <SpecialDeals />
        <PopularDeals />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp(100),
    backgroundColor: COLORS.offWhite,
    // alignItems: "center",
    // justifyContent: "center",
  },
  productView: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
