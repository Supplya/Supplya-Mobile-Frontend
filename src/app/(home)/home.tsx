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

const Home = () => {
  const dummyData = ["Groceries", "Drinks", "Personal Care", "Games"];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.rectangle} />
          <FlatList
            data={dummyData}
            style={{marginVertical: 15}}
            contentContainerStyle={{
              gap: 15,
              paddingHorizontal: 15,
            }}
            renderItem={({ item }) => <CollectionCard item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.productView}>
            {dummyData?.map((item, index) => <ProductCard key={index.toString()}/>)}
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp(100),
    backgroundColor: COLORS.white,
    // alignItems: "center",
    // justifyContent: "center",
  },
  rectangle: {
    width: wp(90),
    marginVertical: 15,
    paddingHorizontal: 20,
    height: hp(20),
    backgroundColor: COLORS.gray2,
    borderRadius: 9,
  },
  circle: {
    width: wp(25),
    aspectRatio: 1,
    backgroundColor: COLORS.gray2,
    borderRadius: wp(25) / 2,
  },
  productView: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  }
});
