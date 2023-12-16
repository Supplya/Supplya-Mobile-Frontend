import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./ordersummarycard.style";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ProductWithUnits } from "utils/types";
import CartItemCounter from "@checkout/CartItemCounter";

interface OrderSummaryProps {
  product: ProductWithUnits;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const OrderSummaryCard = ({ product }: OrderSummaryProps) => {
  const elevation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      elevation: elevation.value,
      zIndex: elevation.value ? 1 : 0,
    };
  });

  const handlePressIn = () => {
    elevation.value = withTiming(50, { duration: 50 });
  };
  const handlePressOut = () => {
    elevation.value = withTiming(0, { duration: 50 });
  };
  return (
    <AnimatedPressable
      style={[styles.container, animatedStyle]}
      onPress={() => console.log("Pressed")}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <View style={styles.square} />
      <View style={styles.detailView}>
        <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
          {product.name}
        </Text>
        <Text style={styles.size} numberOfLines={1}>
          200gr
        </Text>
        <Text style={styles.price} numberOfLines={1}>
          {product.price}
        </Text>
      </View>
      <View style={styles.picker}>
        <CartItemCounter product={product} />
      </View>
    </AnimatedPressable>
  );
};

export default OrderSummaryCard;
