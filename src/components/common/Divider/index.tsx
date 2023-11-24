import * as React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import styles from "./divider.style";

const Divider = ({ children, width = 25 }) => (
  <View style={styles.container}>
    <View style={styles.divider}>
      <Svg width={width} height={width * 0.56} fill="none">
        <Path stroke="#FE6E4C" d="M1 17 24 1" />
      </Svg>
      {/* <Svg width={width} height={width * 0.56} fill="none">
        <Path stroke="#FE6E4C" d="M1 0 L24 0" />
      </Svg> */}
    </View>
    {children}
  </View>
);
export default Divider;
