import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { IMAGES } from "@const/images";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS, SIZES } from "@const/theme";
import { globalStyles } from "styles/global";
import CustomButton from "@/components/common/CustomButton";
import { router } from "expo-router";

const OrderSuccess = () => {
  return (
    <View style={styles.container}>
      <Image
        source={IMAGES.orderSuccess}
        style={styles.image}
        contentFit="contain"
      />
      <View style={styles.textView}>
        <Text style={styles.title}>Order Successful</Text>
        <Text style={styles.subtitle}>
          Grab your items only need to order from home, click pay and wait for
          the courier to arrive
        </Text>
      </View>
      <View style={styles.button}>
        <CustomButton
          title="Continue Shopping"
          onPress={() => router.replace("/home")}
        />
      </View>
    </View>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: wp(SIZES.medium2),
    backgroundColor: COLORS.offWhite,
  },
  image: {
    height: hp(45),
    width: wp(100),
    marginBottom: 30,
  },
  textView: {
    alignItems: "center",
    gap: wp(SIZES.medium2),
  },
  title: {
    ...globalStyles.fontSemiBold24,
  },
  subtitle: {
    ...globalStyles.fontMedium16,
    color: COLORS.gray,
    textAlign: "center",
  },
  button: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: wp(SIZES.medium2),
  },
});
