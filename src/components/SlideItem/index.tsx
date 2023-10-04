import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { COLORS, FONTS, SIZES } from "@const/theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CustomButton from "../CustomButton";
import { router } from "expo-router";

const SlideItem = ({ title, description, image, index }) => {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={{
          width: "100%",
          flex: 0.6,
          borderRadius: 10,
          overflow: "hidden",
        }}
        contentFit="cover"
      />
      <View style={{}}>
        <Text style={styles.title}>{title}</Text>

        <Text>{description}</Text>
      </View>
      {index === 4 && (
        <View style={styles.buttonView}>
          <CustomButton
            title="Sign up"
            onPress={() => router.replace("signup")}
            />
          <CustomButton title="Login" onPress={() => router.replace("login")} />
        </View>
      )}
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    // flex: 1,
    height: hp(100),
    width: wp(100),
    paddingHorizontal: 15,
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
    fontSize: wp(SIZES.medium),
    color: COLORS.dark,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
