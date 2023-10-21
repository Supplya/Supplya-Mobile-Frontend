import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomButton from "@/components/common/CustomButton";
import styles from "./footer.style";
import Cart from "../Cart";
import { router } from "expo-router";

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cartButton}>
        <Cart />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <CustomButton
          title="Buy Now"
          onPress={() => router.push("/order-summary")}
          dynamicWidth={"100%"}
        />
      </View>
    </View>
  );
};

export default Footer;
