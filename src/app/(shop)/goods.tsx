import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Stack, router, useLocalSearchParams } from "expo-router";
import GoodsTypeCard from "@/components/common/GoodsTypeCard";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES } from "@const/theme";
import PopularDealsCard from "@/components/home/PopularDealsCard";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Goods = () => {
  const [selectedType, setSelectedType] = useState(0);

  const { type }: any = useLocalSearchParams();

  const categories = ["All", "Apples", "Avocado", "Banana"];

  const fruitsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handleSelectedType(index) {
    setSelectedType(index);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <Stack.Screen
          options={{
            title: type,
          }}
        />
        <View style={styles.freeShipping}>
          <Text style={styles.freeShippingText}>
            Free shipping with a minimum purchase of $ 100
          </Text>
        </View>
        <FlatList
          data={categories}
          contentContainerStyle={{
            paddingHorizontal: 15,
            gap: 10,
          }}
          style={{ marginBottom: 10 }}
          renderItem={({ item, index }) => (
            <GoodsTypeCard
              type={item}
              selected={selectedType}
              setSelected={handleSelectedType}
              index={index}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
        />
        <View
          style={{
            width: wp(100),
            flexDirection: "row",
            justifyContent: "center",
            gap: 5,
            flexWrap: "wrap",
          }}
        >
          {fruitsArr?.map((item) => (
            <PopularDealsCard
              key={item.toString()}
              handlePress={() => router.push(`/${item}`)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Goods;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.offWhite,
  },
  freeShipping: {
    height: 50,
    backgroundColor: COLORS.orange,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  freeShippingText: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.small),
    color: COLORS.white,
  },
});
