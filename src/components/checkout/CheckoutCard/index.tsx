import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./checkoutcard.style";

interface CheckoutProps {
  name: string;
  units: number;
}

const CheckoutCard = ({ name, units }: CheckoutProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.image} />
      <View style={styles.titleView}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.size}>200gr</Text>
      </View>
      <Text style={styles.price}>x{units}</Text>
    </View>
  );
};

export default CheckoutCard;
