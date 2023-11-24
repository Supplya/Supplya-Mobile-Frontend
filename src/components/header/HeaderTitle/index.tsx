import { View, Text } from "react-native";
import React from "react";
import styles from "./headertitle.style";

const HeaderTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planet Namex 989</Text>
      <Text style={styles.subtitle}>Norristown, Pennsylvannia, 19403</Text>
    </View>
  );
};

export default HeaderTitle;
