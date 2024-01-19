import { Text, View, Pressable } from "react-native";
import React from "react";
import Divider from "../../svg/Divider";
import DiscountTag from "../DiscountTag";
import styles from "./featuredcard.style";
import AnimatedPressable from "@comp/common/AnimatedPressable";

const FeaturedCard = () => {
  return (
    <AnimatedPressable style={styles.container} onPress={() => {}}>
      <View style={styles.square} />
      <View style={styles.description}>
        <DiscountTag />
        <Text style={styles.name}>Dragon Fruit</Text>
        <Text style={styles.size}>200 gr</Text>
      </View>
      <View style={styles.priceView}>
        <Divider>
          <Text style={styles.discount}>$90</Text>
        </Divider>
        <Text style={styles.price}>$45</Text>
      </View>
    </AnimatedPressable>
  );
};

export default FeaturedCard;
