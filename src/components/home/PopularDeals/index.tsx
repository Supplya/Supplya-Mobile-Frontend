import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import React from "react";
import SubHeader from "../SubHeader";
import PopularDealsCard from "../PopularDealsCard";
import { router } from "expo-router";
import styles from "./populardeals.style";
import useFetchProducts from "hooks/useFetchProducts";
import { RequestParams } from "utils/types";
import { COLORS } from "@const/theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { globalStyles } from "styles/global";
import Ionicons from "@expo/vector-icons/Ionicons";

const PopularDeals = () => {
  const url = "https://supplya.cyclic.app/api/v1";
  const options: RequestParams = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${url}/products`,
  };
  const { data, error, isLoading, fetchData } = useFetchProducts(options);
  return (
    <>
      <SubHeader
        title="Popular Deals"
        onPress={() => router.push("/popular-deals")}
      />
      <View style={styles.root}>
        {isLoading ? (
          <View
            style={{
              height: hp(9),
              width: wp(100),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        ) : error ? (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              justifyContent: "center",
              marginVertical: wp(8),
            }}
            onPress={fetchData}
          >
            <Text style={{ ...globalStyles.fontRegular14 }}>
              Something went wrong. Tap here to try again
            </Text>
            <Ionicons
              name="reload-circle-sharp"
              size={24}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.list}>
            {data.products?.map((item, index) => (
              <PopularDealsCard
                key={index.toString()}
                product={item}
                handlePress={() => {
                  router.push(`/${item._id}`);
                }}
              />
            ))}
          </View>
        )}
      </View>
    </>
  );
};

export default PopularDeals;
