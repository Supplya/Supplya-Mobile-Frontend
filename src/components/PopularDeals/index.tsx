import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SubHeader from "../home/SubHeader";
import PopularDealsCard from "../home/PopularDealsCard";

const PopularDeals = () => {
  const data = ["0", "1", "2", "3"];
  const [selected, setSelected] = useState(undefined);

  function handleSelected(index: number) {
    setSelected(index)
  }
  return (
    <View>
      <SubHeader title="Popular Deals" />
      <View style={styles.list}>
        {data?.map((_, index) => {
          return <PopularDealsCard key={index.toString()} selected={selected} setSelected={handleSelected} index={index}/>;
        })}
      </View>
    </View>
  );
};

export default PopularDeals;

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 10,
  },
});
