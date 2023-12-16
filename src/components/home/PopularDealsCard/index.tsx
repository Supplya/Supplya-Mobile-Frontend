import { Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { COLORS } from "@const/theme";
import { Ionicons } from "@expo/vector-icons";
import styles from "./populardealscard.style";
import AnimatedPressable from "@comp/common/AnimatedPressable";
import { Product } from "utils/types";
import useCartStore from "store/cartStore";

interface PopularCardProps {
  handlePress: () => void;
  product: Product;
}
const PopularDealsCard = ({ handlePress, product }: PopularCardProps) => {
  const { products, addProduct } = useCartStore();

  const [productExists, setProductExists] = useState<boolean>(false);

  // Checks whether current product exists in the cart
  const findProduct = useCallback(() => {
    setProductExists(products.some((p) => p?._id === product?._id));
  }, [products]);

  useEffect(() => {
    findProduct();
  }, [products]);

  return (
    <AnimatedPressable style={styles.container} onPress={handlePress}>
      <View style={styles.square} />
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {product?.name}
      </Text>
      <Text style={styles.subtitle}>200gr</Text>
      <View style={styles.row}>
        <Text style={styles.price}>₦ {product?.price.toLocaleString()}</Text>
        <TouchableOpacity
          disabled={productExists}
          style={[
            styles.plusButton,
            { backgroundColor: productExists ? COLORS.gray2 : COLORS.primary },
          ]}
          onPress={() => addProduct(product)}
        >
          <Ionicons
            name={productExists ? "checkmark-sharp" : "add"}
            color={COLORS.white}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </AnimatedPressable>
  );
};

export default PopularDealsCard;
