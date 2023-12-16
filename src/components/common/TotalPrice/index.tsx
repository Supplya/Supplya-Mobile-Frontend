import { Text, View } from "react-native";
import React from "react";
import { TotalPriceData } from "utils/types";
import styles from "./totalprice.style";

interface TotalPriceProps {
  total: number;
}

const TotalPrice = ({ total }: TotalPriceProps) => {
  const deliveryFee = 1500;
  const grossTotal = total + deliveryFee;
  return (
    <View>
      <View style={styles.totalView}>
        <Text style={styles.name}>Sub total price</Text>
        <Text style={styles.price}>₦ {total}</Text>
      </View>
      <View style={styles.totalView}>
        <Text style={styles.name}>Delivery fee</Text>
        <Text style={styles.price}>₦ {deliveryFee}</Text>
      </View>
      <View style={styles.totalView}>
        <Text style={styles.name}>TanahAir voucher</Text>
        <Text style={styles.price}>None</Text>
      </View>
      <View style={styles.totalView}>
        <Text style={styles.name}>Total price</Text>
        <Text style={styles.price}>₦ {grossTotal}</Text>
      </View>
    </View>
  );
};

export default TotalPrice;
