import { Text, TouchableOpacity, View, Pressable } from "react-native";
import React from "react";
import { COLORS } from "@const/theme";
import { Ionicons } from "@expo/vector-icons";
import styles from "./populardealscard.style";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { router } from "expo-router";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const PopularDealsCard = ({ handlePress }) => {
  const elevation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      elevation: elevation.value,
      zIndex: elevation.value ? 1 : 0,
    };
  });

  function handleTiming() {
    elevation.value = withTiming(elevation.value + 50, { duration: 50 });
    setTimeout(() => {
      elevation.value = withTiming(elevation.value - 50, { duration: 50 });
    }, 50);
  }

  function handlePressIn() {
    elevation.value = withTiming(elevation.value + 50, { duration: 50 });
  }

  function handlePressOut() {
    elevation.value = withTiming(elevation.value - 50, { duration: 50 });
  }
  return (
    <AnimatedPressable
      style={[styles.container, animatedStyle]}
      onPress={() => {
        console.log("Whole button called");
        router.push("/DragonFruit");
      }}
      onPressIn={handlePressIn}
      onPressOut={() => {
        handlePressOut();
      }}
    >
      <View style={styles.square} />
      <Text style={styles.title}>Dragon Fruit</Text>
      <Text style={styles.subtitle}>200gr</Text>
      <View style={styles.row}>
        <Text style={styles.price}>$45</Text>
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => console.log("Quantity picker called")}
        >
          <Ionicons name="add" color={COLORS.white} size={20} />
        </TouchableOpacity>
      </View>
    </AnimatedPressable>
  );
};

export default PopularDealsCard;
