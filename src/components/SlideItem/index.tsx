import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { COLORS, FONTS, SIZES } from "@const/theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const SlideItem = ({ title, description, image, index, skipScreen }) => {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={{
          width: "100%",
          flex: 0.7,
          backgroundColor: "red"
        }}
        contentFit="cover"
      />
      {
        index > 0 && 
      <TouchableOpacity style={styles.skipButton} onPress={skipScreen}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      }
      <Text style={[styles.title, index === 0 && {alignSelf: "flex-start", paddingLeft: 10, fontSize: wp(SIZES.extraLarge) }]}>{title}</Text>

      <Text style={styles.subtitle}>{description}</Text>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: wp(100),
    height: hp(100),
    alignItems: "center",
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: wp(SIZES.large),
    color: COLORS.dark,
    letterSpacing: -0.408,
    marginVertical: 20,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    // fontSize: wp(SIZES.medium),
    color: COLORS.gray,
  },
  skipButton: {
    position: 'absolute',
    right: 30,
    top: 30,
    zIndex: 3,
  },
  skipText: {
    fontFamily: FONTS.medium,
    fontSize: wp(SIZES.medium),
    marginTop: 30,
  },
});
