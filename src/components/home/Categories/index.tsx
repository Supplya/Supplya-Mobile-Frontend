import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Vegetables from "../Vegetables";
import Fruits from "../Fruits";
import MilksandEgg from "../MilkandEgg";
import Meat from "../Meat";
import { COLORS } from "@const/theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import SubHeader from "../SubHeader";
import { router } from "expo-router";
import { globalStyles } from "styles/global";
import styles from "./categories.style";
import useFetch from "hooks/useFetch";
import { CatResponse, RequestParams } from "utils/types";
import Ionicons from "@expo/vector-icons/Ionicons";

const Categories = () => {
  const options: RequestParams = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://supplya.cyclic.app/api/v1/categories",
  };
  const { data, isLoading, error, fetchData } = useFetch<CatResponse>(options);
  return (
    <>
      <SubHeader
        title="Categories"
        onPress={() => router.push("/categories")}
      />
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
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: wp(6),
          }}
          onPress={fetchData}
        >
          <Text style={{ ...globalStyles.fontRegular14 }}>
            Something went wrong. Tap here to try again
          </Text>

          <Ionicons name="reload-circle-sharp" size={24} color={COLORS.gray} />
        </TouchableOpacity>
      ) : (
        <FlatList
          data={data.categories}
          renderItem={({ item }) => {
            return (
              <View style={{ width: wp("33.33%") }}>
                <TouchableOpacity
                  style={{ alignItems: "center" }}
                  onPress={() =>
                    router.push({
                      pathname: "/goods",
                      params: { type: item.name },
                    })
                  }
                >
                  <View
                    style={[
                      styles.iconView,
                      {
                        backgroundColor:
                          item.name === "Vegetables"
                            ? COLORS.lightGreen
                            : item.name === "Fruits"
                            ? COLORS.lightOrange
                            : item.name === "Milks & Egg"
                            ? COLORS.lightYellow
                            : COLORS.lightPurple,
                      },
                    ]}
                  >
                    <Vegetables />
                  </View>
                  <Text
                    style={[
                      globalStyles.fontRegular14,
                      {
                        color: COLORS.dark2,
                      },
                    ]}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
          horizontal
        />
      )}
    </>
  );
};

export default Categories;
