import { StyleSheet, View } from "react-native";
import React from "react";
import Slider from "@/components/onboarding/Slider";
import CustomButton from "@/components/common/CustomButton";
import { router } from "expo-router";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { SIZES } from "@const/theme";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Slider />
      <View
        style={{
          flex: 0.2,
          width: "100%",
          justifyContent: "flex-end",
          paddingHorizontal: wp(SIZES.medium2),
          bottom: wp(SIZES.medium2),
        }}
      >
        <CustomButton
          title="Get Started"
          onPress={() => router.push("/login")}
        />
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
