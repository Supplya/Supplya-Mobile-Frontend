import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { COLORS, FONTS, SIZES } from "@const/theme";
import { Ionicons } from "@expo/vector-icons";

const PopularDealsCard = ({ selected, setSelected, index, handlePress }) => {
  // console.log("Popular deals card rendered");
  return (
    <Pressable
      style={[
        styles.container,
        {
          elevation: selected === index ? 50 : 0,
          zIndex: selected === index ? 1 : 0,
        },
      ]}
      onPress={() => {
        setSelected(index);
        handlePress();
      }}
    >
      <View style={styles.square} />
      <Text style={styles.title}>Dragon Fruit</Text>
      <Text style={styles.subtitle}>200gr</Text>
      <View style={styles.row}>
        <Text style={styles.price}>$45</Text>
        <TouchableOpacity style={styles.plusButton} onPress={() => {}}>
          <Ionicons name="add" color={COLORS.white} size={20} />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default PopularDealsCard;

const styles = StyleSheet.create({
  container: {
    width: wp(45),
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 10,
  },
  square: {
    alignSelf: "center",
    width: "100%",
    aspectRatio: 152 / 113,
    backgroundColor: COLORS.systemGray,
    borderRadius: 8,
    marginBottom: 5,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium3),
    color: COLORS.dark,
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.extraSmall),
    color: COLORS.gray,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.medium3),
  },
  plusButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
