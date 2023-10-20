import * as React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import styles from "./divider.style";

const Divider = ({ children }) => (
  <View style={styles.container}>
    <View style={styles.divider}>
      <Svg width={25} height={14} fill="none">
        <Path stroke="#FE6E4C" d="M1 17 24 1" />
      </Svg>
    </View>
    {children}
  </View>
);
export default Divider;
