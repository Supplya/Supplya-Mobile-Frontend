import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SubHeader from "../SubHeader";
import SpecialDealsCard from "../SpecialDealsCard";

const SpecialDeals = () => {
  return (
    <View style={{ marginVertical: 15 }}>
      <SubHeader title="Special Deals for You" />
      <FlatList
        data={[0, 1]}
        contentContainerStyle={{ paddingHorizontal: 20, gap: 20 }}
        renderItem={({ item }) => <SpecialDealsCard />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SpecialDeals;

const styles = StyleSheet.create({});
