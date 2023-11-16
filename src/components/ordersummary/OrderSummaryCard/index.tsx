import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./ordersummarycard.style";
import QuantityPicker from "@/components/common/QuantityPicker";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const OrderSummaryCard = ({ item }) => {
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
        <Text style={styles.name}>Dragon Fruit</Text>
        <Text style={styles.size}>200gr</Text>
        <Text style={styles.price}>$45</Text>
      </View>
      <View style={styles.picker}>
        <QuantityPicker />
      </View>
    </AnimatedPressable>
  );
};

export default OrderSummaryCard;
