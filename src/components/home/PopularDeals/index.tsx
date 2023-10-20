import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SubHeader from "../SubHeader";
import PopularDealsCard from "../PopularDealsCard";
import { router } from "expo-router";
import styles from "./populardeals.style";

const PopularDeals = () => {
  const data = ["0", "1", "2", "3"];
  const [selected, setSelected] = useState(undefined);

  function handleSelected(index: number) {
    setSelected(index);
  }
  return (
    <View>
      <SubHeader
        title="Popular Deals"
        onPress={() => router.push("/popular-deals")}
      />
      <View style={styles.list}>
        {data?.map((item, index) => (
          <PopularDealsCard
            key={index.toString()}
            selected={selected}
            setSelected={handleSelected}
            index={index}
            handlePress={() => router.push(`/${item}`)}
          />
        ))}
      </View>
    </View>
  );
};

export default PopularDeals;
