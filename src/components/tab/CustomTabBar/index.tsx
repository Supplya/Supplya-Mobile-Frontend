import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { COLORS } from "@const/theme";

const CustomTabBar = (props) => {
  return (
    <View>
      <BottomTabBar {...props} />
      <View style={styles.fill} />
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  fill: {
    height: 10,
    width: wp(100),
    backgroundColor: COLORS.white
  }
});
