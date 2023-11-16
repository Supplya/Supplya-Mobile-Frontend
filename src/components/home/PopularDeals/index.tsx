import { View } from "react-native";
import React from "react";
import SubHeader from "../SubHeader";
import PopularDealsCard from "../PopularDealsCard";
import { router } from "expo-router";
import styles from "./populardeals.style";

const PopularDeals = () => {
  const data = ["0", "1", "2", "3"];

  return (
    <>
      <SubHeader
        title="Popular Deals"
        onPress={() => router.push("/popular-deals")}
      />
      <View style={styles.list}>
        {data?.map((item, index) => (
          <PopularDealsCard
            key={index.toString()}
            handlePress={() => {
              // router.push(`/${item}`)
            }}
          />
        ))}
      </View>
    </>
  );
};

export default PopularDeals;
