import { Text, View, TouchableOpacity } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import Minus from "../../svg/Minus";
import Plus from "../../svg/Plus";
import { COLORS } from "@const/theme";
import { globalStyles } from "styles/global";
import styles from "./quantitypicker.style";
import useCartStore from "store/cartStore";
import { Product } from "utils/types";

interface QuantityPickerProps {
  product: Product;
}
const QuantityPicker = ({ product }: QuantityPickerProps) => {
  const { addProduct, reduceProduct, products } = useCartStore();
  const [isDisabled, setIsDisabled] = useState(false);

  // use useEffect or useLayoutEffect instead
  const findProduct = useCallback(
    () => products.find((p) => p?._id === product?._id),
    [products]
  );

  const currentProduct = findProduct();

  useEffect(() => {
    setIsDisabled(!currentProduct?.units);
  }, [products]);

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
          {currentProduct?.units || 0}
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

export default QuantityPicker;
