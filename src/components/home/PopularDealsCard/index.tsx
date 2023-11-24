import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "@const/theme";
import { Ionicons } from "@expo/vector-icons";
import styles from "./populardealscard.style";
import AnimatedPressable from "@comp/common/AnimatedPressable";
import { Product } from "utils/types";

interface PopularCardProps {
  handlePress: () => void;
  product: Product;
}
const PopularDealsCard = ({ handlePress, product }: PopularCardProps) => {
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
