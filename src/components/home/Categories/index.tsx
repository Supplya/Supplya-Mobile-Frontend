import {
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
import { COLORS, FONTS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import SubHeader from "../SubHeader";
import { router } from "expo-router";
import { globalStyles } from "styles/global";
import styles from "./categories.style";

const Categories = () => {
  const data = ["Vegetables", "Fruits", "Milks & Egg", "Meat"];
  return (
    <>
      <SubHeader
        title="Categories"
        onPress={() => router.push("/categories")}
      />
      <FlatList
        data={data}
        contentContainerStyle={{}}
        renderItem={({ item }) => {
          return (
            <View style={{ width: wp("25%") }}>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() =>
                  router.push({ pathname: "/goods", params: { type: item } })
                }
              >
                <View
                  style={[
                    styles.iconView,
                    {
                      backgroundColor:
                        item === "Vegetables"
                          ? COLORS.lightGreen
                          : item === "Fruits"
                          ? COLORS.lightOrange
                          : item === "Milks & Egg"
                          ? COLORS.lightYellow
                          : COLORS.lightPurple,
                    },
                  ]}
                >
                  {item === "Vegetables" ? (
                    <Vegetables />
                  ) : item === "Fruits" ? (
                    <Fruits />
                  ) : item === "Milks & Egg" ? (
                    <MilksandEgg />
                  ) : item === "Meat" ? (
                    <Meat />
                  ) : null}
                </View>
                <Text
                  style={[
                    globalStyles.fontRegular14,
                    {
                      color: COLORS.dark2,
                    },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        horizontal
      />
    </>
  );
};

export default Categories;
