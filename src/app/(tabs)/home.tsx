import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS } from "@const/theme";
import { Tabs, useFocusEffect } from "expo-router";
import HeaderTitle from "@/components/header/HeaderTitle";
import Search from "@/components/common/Search";
import Categories from "@/components/home/Categories";
import SpecialDeals from "@/components/home/SpecialDeals";
import PopularDeals from "@/components/home/PopularDeals";

const Home = () => {
  console.log("Home screen rendered");

  return (
    <View style={styles.container}>
      <Tabs.Screen
        options={{
          headerRight: () => <Search style={{ marginRight: 20 }} />,
          headerTitle: () => <HeaderTitle />,
          headerStyle: { backgroundColor: COLORS.offWhite },
          headerShadowVisible: false,
        }}
      />
      <ScrollView contentContainerStyle={{ paddingTop: 20, paddingBottom: 60 }}>
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
  },
  productView: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
