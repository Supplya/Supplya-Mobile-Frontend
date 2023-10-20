import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { COLORS, FONTS } from "@const/theme";
import styles from "./productcard.style";

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle} />
      <Text style={{ fontFamily: FONTS.bold, fontSize: 16 }}>Product Name</Text>
      <Text style={{ fontFamily: FONTS.medium, fontSize: 12 }}>10Kg</Text>
      <Text style={{ fontFamily: FONTS.bold, fontSize: 14 }}>N20,000</Text>
    </View>
  );
};

export default ProductCard;
