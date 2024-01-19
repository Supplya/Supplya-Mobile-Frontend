import { Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import DiscountTag from "@/components/common/DiscountTag";
import Divider from "@/components/svg/Divider";
import styles from "./productinfo.style";
import { Product } from "utils/types";
import ListItem from "react-native-paper/lib/typescript/components/List/ListItem";

interface ProductInfoProps {
  product: Product;
}
const ProductInfo = ({ product }: ProductInfoProps) => {
  const [textWidth, setTextWidth] = useState<number | undefined>(undefined);

  const handleTextLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    setTextWidth(width);
  };

  function calculateHypotenuse(opposite: number, adjacent: number) {
    return Math.sqrt(Math.pow(opposite, 2) + Math.pow(adjacent, 2));
  }

  const lineWidth = useMemo(
    () => calculateHypotenuse(15, textWidth),
    [textWidth]
  );

  const radians = Math.atan(15 / textWidth);
  const degrees = (radians * (180 / Math.PI)).toString();

  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <DiscountTag />
        <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
          {product?.name}
        </Text>
        <Text style={styles.smallGrayText}>200gr</Text>
      </View>
      <View style={styles.rightSide}>
        <View style={styles.discountView}>
          <View
            style={[
              styles.line,
              lineWidth &&
                degrees && {
                  width: lineWidth,
                  transform: [{ rotate: `-${degrees}deg` }],
                },
            ]}
          />
          <Text style={styles.smallGrayText} onLayout={handleTextLayout}>
            ₦ {(product?.price * 0.5)?.toLocaleString()}
          </Text>
        </View>
        <Text style={styles.price}>₦ {product?.price.toLocaleString()}</Text>
      </View>
    </View>
  );
};

export default ProductInfo;
