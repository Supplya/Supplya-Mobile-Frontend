import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import React from "react";
import { COLORS } from "@const/theme";
import { Ionicons } from "@expo/vector-icons";
import styles from "./populardealscard.style";

const PopularDealsCard = ({ selected, setSelected, index, handlePress }) => {
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
