import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DiscountTag from "@/components/common/DiscountTag";
import Divider from "@/components/common/Divider";

const DetailsCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <DiscountTag />
        <Text>Dragon Fruit</Text>
        <Text>200gr</Text>
      </View>
      <View>
        <>
          <Text>$90</Text>
          <Divider />
        </>
        <Text></Text>
      </View>
    </View>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
});
