import { Text, View, TouchableOpacity } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import Minus from "@comp/svg/Minus";
import Plus from "@comp/svg/Plus";
import { COLORS } from "@const/theme";
import { globalStyles } from "styles/global";
import styles from "./quantitypicker.style";
import useCartStore from "store/cartStore";
import { Product, ProductWithUnits } from "utils/types";

interface CartItemProps {
  product: ProductWithUnits;
}
const CartItemCounter = ({ product }: CartItemProps) => {
  const { addProduct, reduceProduct } = useCartStore();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsDisabled(!product?.units);
  }, [product]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={isDisabled}
        style={[styles.button, { opacity: isDisabled ? 0.2 : 1 }]}
        onPress={() => reduceProduct(product)}
      >
        <Minus />
      </TouchableOpacity>
      <View style={styles.countView}>
        <Text style={[globalStyles.fontBold16, { color: COLORS.labelDark }]}>
          {product?.units || 0}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => addProduct(product)}
      >
        <Plus />
      </TouchableOpacity>
    </View>
  );
};

export default CartItemCounter;
