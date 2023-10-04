import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import React from "react";
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS, FONTS, SIZES } from "@const/theme";
import { StatusBar } from "expo-status-bar";
import Slider from "@comp/Slider";
import SlideItem from "@/components/SlideItem";
import { IMAGES } from "@const/images";
import Pagination from "@comp/Pagination";
import { ScrollView } from "react-native-gesture-handler";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Slider />
      <StatusBar translucent={false} backgroundColor={COLORS.white} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: hp("100%"),
    // paddingTop: 60,
    backgroundColor: COLORS.white,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
