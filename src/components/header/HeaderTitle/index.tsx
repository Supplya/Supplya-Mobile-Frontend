import { Text } from "react-native";
import React from "react";
import styles from "./headertitle.style";

const HeaderTitle = () => {
  return (
    <>
      <Text style={styles.title}>Planet Namex 989</Text>
      <Text style={styles.subtitle}>Norristown, Pennsylvannia, 19403</Text>
    </>
  );
};

export default HeaderTitle;
