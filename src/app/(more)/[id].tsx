import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { COLORS } from "@const/theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import DetailsCard from "@/components/details/ProductInfo";
import QuantityPicker from "@comp/common/QuantityPicker";
import { globalStyles } from "styles/global";
import { ScrollView } from "react-native-gesture-handler";
import ProductTab from "@/components/details/ProductTab";
import ReviewTab from "@/components/details/ReviewTab";
import DetailsTab from "@/components/details/DetailsTab";
import Footer from "@/components/details/Footer";

const Details = () => {
  const tabs = ["Reviews", "Details"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  const displayTabContent = () => {
    switch (activeTab) {
      case "Reviews":
        return <ReviewTab />;
      case "Details":
        return <DetailsTab />;
      default:
        return <Text>Something went wrong</Text>;
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: hp(7.4) }}
      >
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
        <ProductTab
          activeTab={activeTab}
          setActiveTab={handleActiveTab}
          tabs={tabs}
        />
        {displayTabContent()}
      </ScrollView>
      <Footer />
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
