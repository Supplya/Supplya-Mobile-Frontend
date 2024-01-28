import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { COLORS } from "@const/theme";
import Categories from "@/components/home/Categories";
import SpecialDeals from "@/components/home/SpecialDeals";
import PopularDeals from "@/components/home/PopularDeals";
import { useNavigation } from "expo-router";
import CustomHeader from "@/components/header/CustomHeader";

const Buy = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      header: () => <CustomHeader />,
      headerStyle: { backgroundColor: COLORS.offWhite },
      headerShadowVisible: false,
    });
  });
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingTop: 20, paddingBottom: 60 }}>
        <Categories />
        <SpecialDeals />
        <PopularDeals />
      </ScrollView>
    </View>
  );
};

export default Buy;

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
