import { Text, View } from "react-native";
import React from "react";
import DiscountTag from "@/components/common/DiscountTag";
import Divider from "@/components/common/Divider";
import styles from "./productinfo.style";

const ProductInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <DiscountTag />
        <Text style={styles.name}>Dragon Fruit</Text>
        <Text style={styles.smallGrayText}>200gr</Text>
      </View>
      <View style={styles.rightSide}>
        <Divider>
          <Text style={styles.smallGrayText}>$90</Text>
        </Divider>
        <Text style={styles.price}>$45</Text>
      </View>
    </View>
  );
};

export default ProductInfo;
