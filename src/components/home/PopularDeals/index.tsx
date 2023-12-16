import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import SubHeader from "../SubHeader";
import PopularDealsCard from "../PopularDealsCard";
import { router } from "expo-router";
import styles from "./populardeals.style";
import useFetchProducts from "hooks/useFetchProducts";
import { RequestParams } from "utils/types";
import { COLORS } from "@const/theme";
import productData from "assets/data/productData";

const PopularDeals = () => {
  const url = "https://supplya.cyclic.app/api/v1";
  const options: RequestParams = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${url}/products`,
  };
  const { data, error, isLoading, fetchData } = useFetchProducts(options);
  return (
    <>
      <SubHeader
        title="Popular Deals"
        onPress={() => router.push("/popular-deals")}
      />
      <View style={styles.root}>
        {isLoading ? (
          <View style={{ alignSelf: "center" }}>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        ) : error ? (
          <>
            <Text>Something went wrong</Text>
            <View style={styles.list}>
              {productData?.map((item, index) => (
                <PopularDealsCard
                  key={index.toString()}
                  product={item}
                  handlePress={() => {
                    router.push(`/${item._id}`);
                  }}
                />
              ))}
            </View>
          </>
        ) : (
          <View style={styles.list}>
            {data.products?.map((item, index) => (
              <PopularDealsCard
                key={index.toString()}
                product={item}
                handlePress={() => {
                  router.push(`/${item._id}`);
                }}
              />
            ))}
          </View>
        )}
      </View>
    </>
  );
};

export default PopularDeals;
