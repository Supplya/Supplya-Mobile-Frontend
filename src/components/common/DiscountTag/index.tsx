import { Text, View } from "react-native";
import React from "react";
import styles from "./discounttag.style";

const DiscountTag = () => {
  return (
    <View style={styles.discountTag}>
      <Text style={styles.discountText}>Disc 40%</Text>
    </View>
  );
};

export default DiscountTag;
