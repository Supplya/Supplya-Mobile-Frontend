import { View } from "react-native";
import React from "react";
import SubHeader from "../SubHeader";
import PopularDealsCard from "../PopularDealsCard";
import { router } from "expo-router";
import styles from "./populardeals.style";
import useFetch from "hooks/useFetch";
import { RequestParams } from "utils/types";

const PopularDeals = () => {
  const options: RequestParams = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://supplya.cyclic.app/api/v1/products",
  };
  // const { data, error, isLoading } = useFetch(options);
  return (
    <>
      <SubHeader
        title="Popular Deals"
        onPress={() => router.push("/popular-deals")}
      />
      {/* {
        isLoading ? console.log("Loading Nicker")
      } */}
      <View style={styles.list}>
        {data?.map((item, index) => (
          <PopularDealsCard
            key={index.toString()}
            handlePress={() => {
              router.push(`/${item}`);
            }}
          />
        ))}
      </View>
    </>
  );
};

export default PopularDeals;
