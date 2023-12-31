import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "@const/theme";
import styles from "./backbutton.style";

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name="md-arrow-back" size={22} color={COLORS.primary} />
    </TouchableOpacity>
  );
};

export default BackButton;
