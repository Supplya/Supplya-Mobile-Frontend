import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { COLORS } from "@const/theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import DetailsCard from "@comp/details/DetailsCard";
import QuantityPicker from "@comp/common/QuantityPicker";
import { globalStyles } from "styles/global";
import { ScrollView } from "react-native-gesture-handler";
import ProductDetails from "@/components/details/ProductDetails";

const Details = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Stack.Screen
          options={{
            title: "Dragon Fruit",
            headerStyle: {
              backgroundColor: COLORS.white,
            },
          }}
        />
        <View style={styles.image} />
        <DetailsCard />
        <View style={styles.quantityPicker}>
          <Text style={[globalStyles.fontBold20, { color: COLORS.labelDark }]}>
            $45
          </Text>
          <QuantityPicker />
        </View>
        <ProductDetails />
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: wp(100),
    aspectRatio: 375 / 240,
    backgroundColor: COLORS.systemGray,
  },
  quantityPicker: {
    flexDirection: "row",
    width: wp(100),
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
