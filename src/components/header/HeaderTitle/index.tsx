import { View, Text } from "react-native";
import React from "react";
import styles from "./headertitle.style";

const HeaderTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Full Name</Text>
      <Text style={styles.subtitle}>User Address, Lagos, Nigeria</Text>
    </View>
  );
};

export default HeaderTitle;
