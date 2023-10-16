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
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Slider />
      <View style={{flex: 0.2, top: 40}}>

      <CustomButton title="Get Started" width="90%" onPress={()=> router.push("/login")}/>
      </View>
      {/* <StatusBar backgroundColor={COLORS.white} /> */}
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

  },
});
