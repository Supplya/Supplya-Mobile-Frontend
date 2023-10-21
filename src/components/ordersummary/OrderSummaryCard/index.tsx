import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./ordersummarycard.style";
import QuantityPicker from "@/components/common/QuantityPicker";

const OrderSummaryCard = ({ item, selected, setSelected }) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          elevation: selected === item ? 50 : 0,
          zIndex: selected === item ? 1 : 0,
        },
      ]}
      onPress={() => setSelected(item)}
    >
      <View style={styles.square} />
      <View style={styles.detailView}>
        <Text style={styles.name}>Dragon Fruit</Text>
        <Text style={styles.size}>200gr</Text>
        <Text style={styles.price}>$45</Text>
      </View>
      <View style={styles.picker}>
        <QuantityPicker />
      </View>
    </Pressable>
  );
};

export default OrderSummaryCard;
