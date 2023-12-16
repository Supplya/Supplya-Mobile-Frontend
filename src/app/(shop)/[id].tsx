import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { COLORS } from "@const/theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ProductInfo from "@comp/details/ProductInfo";
import QuantityPicker from "@comp/common/QuantityPicker";
import { globalStyles } from "styles/global";
import { ScrollView } from "react-native-gesture-handler";
import ProductTab from "@comp/details/ProductTab";
import ReviewTab from "@comp/details/ReviewTab";
import DetailsTab from "@comp/details/DetailsTab";
import Footer from "@comp/details/Footer";
import { Product, RequestParams } from "utils/types";
import useFetch from "hooks/useFetch";

const Details = () => {
  console.log("Details rendered");
  const { id } = useLocalSearchParams();

  const { setOptions } = useNavigation();
  const url = "https://supplya.cyclic.app/api/v1";

  const options: RequestParams = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${url}/products/${id}`,
  };

  const { data, error, isLoading } = useFetch<Product>(options);

  const tabs = ["Reviews", "Details"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  const displayTabContent = useCallback(() => {
    switch (activeTab) {
      case "Reviews":
        return <ReviewTab />;
      case "Details":
        return <DetailsTab />;
      default:
        return <Text>Something went wrong</Text>;
    }
  }, [activeTab]);

  useEffect(() => {
    setOptions({
      headerTitle: () => (
        <Text style={styles.headerText} numberOfLines={1} ellipsizeMode="tail">
          {data ? data.name : ""}
        </Text>
      ),
      headerStyle: {
        backgroundColor: COLORS.white,
      },
    });
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={{ height: hp(70), justifyContent: "center" }}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      ) : error ? (
        <Text>Something is wrong</Text>
      ) : (
        <ScrollView
          style={{ flex: 1, width: wp(100) }}
          contentContainerStyle={{
            alignItems: "center",
            paddingBottom: hp(7.4),
          }}
        >
          <View style={styles.image} />
          <ProductInfo product={data} />
          <View style={styles.quantityPicker}>
            <Text
              style={[globalStyles.fontBold20, { color: COLORS.labelDark }]}
            >
              ₦ {data?.price}
            </Text>
            <QuantityPicker product={data} />
          </View>
          <ProductTab
            activeTab={activeTab}
            setActiveTab={handleActiveTab}
            tabs={tabs}
          />
          {displayTabContent()}
        </ScrollView>
      )}
      <Footer product={data} />
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
  headerText: {
    ...globalStyles.fontBold20,
    width: wp(50),
    textAlign: "center",
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
