import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { Stack, router, useLocalSearchParams } from "expo-router";
import GoodsTypeCard from "@comp/common/GoodsTypeCard";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES } from "@const/theme";
import PopularDealsCard from "@comp/home/PopularDealsCard";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import useFetchProducts from "hooks/useFetchProducts";
import { RequestParams } from "utils/types";

const Goods = () => {
  const [selectedType, setSelectedType] = useState(0);

  const { type }: any = useLocalSearchParams();

  const categories = ["All", "Apples", "Avocado", "Banana"];

  const url = "https://supplya.cyclic.app/api/v1";
  const options: RequestParams = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${url}/products`,
  };
  const { data, error, isLoading } = useFetchProducts(options);

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
          // style={{ marginBottom: 10 }}
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

        {isLoading ? (
          <View
            style={{
              // backgroundColor: "red",
              height: hp(30),
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        ) : error ? (
          <Text>Something is wrong. Try again</Text>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: wp(SIZES.extraSmall),
              marginHorizontal: wp(SIZES.medium),
            }}
          >
            {data.products?.map((item) => (
              <PopularDealsCard
                key={item._id}
                product={item}
                handlePress={() => router.push(`/${item._id}`)}
              />
            ))}
          </View>
        )}
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
