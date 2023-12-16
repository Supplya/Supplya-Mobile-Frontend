import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomButton from "@/components/common/CustomButton";
import styles from "./footer.style";
import Cart from "../Cart";
import { router } from "expo-router";
import useCartStore from "store/cartStore";
import { Product } from "utils/types";

const Footer = ({ product }: { product: Product }) => {
  const { items, addProduct } = useCartStore();
  const handleBuyNow = () => {
    if (items === 0) {
      addProduct(product);
    }
    router.push("/order-summary");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => {
          router.push("/order-summary");
        }}
      >
        <Cart />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <CustomButton title="Buy Now" onPress={handleBuyNow} />
      </View>
    </View>
  );
};

export default Footer;
