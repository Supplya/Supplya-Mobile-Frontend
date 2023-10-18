import * as React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const Divider = () => (
  <View style={styles.container}>
    <Svg width={25} height={14} fill="none">
      <Path stroke="#FE6E4C" d="M1 17 24 1" />
    </Svg>
  </View>
);
export default Divider;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
});
