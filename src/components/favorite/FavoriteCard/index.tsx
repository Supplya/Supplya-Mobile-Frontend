import { Text, View, Pressable } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import DiscountTag from "@comp/common/DiscountTag";
import Divider from "@/components/svg/Divider";
import styles from "./favoritecard.style";
import CustomButton from "@comp/common/CustomButton";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const FavoriteCard = () => {
  return (
    <>
      <AnimatedPressable style={styles.container}>
        <View style={styles.image} />
        <View style={styles.nameView}>
          <DiscountTag />
          <Text style={styles.name}>Dragon Fruit</Text>
          <Text style={styles.size}>200gr</Text>
        </View>
        <View style={styles.priceView}>
          <Divider>
            <Text style={styles.slashedPrice}>$90</Text>
          </Divider>
          <Text style={styles.price}>$45</Text>
        </View>
      </AnimatedPressable>
      <View style={styles.buttonRow}>
        <CustomButton title="Remove" tertiary onPress={() => {}} />
        <CustomButton title="Checkout" onPress={() => {}} />
      </View>
    </>
  );
};

export default FavoriteCard;
