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
import MilksandEgg from "../MilksandEgg";
import Meat from "../Meat";
import { COLORS, FONTS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import SubHeader from "../SubHeader";

const Categories = () => {
  const data = ["Vegetables", "Fruits", "Milks & Egg", "Meat"];
  return (
    <View>
      <SubHeader title="Categories" />
      <FlatList
        data={data}
        contentContainerStyle={{}}
        renderItem={({ item }) => {
          return (
            <View style={{ width: wp("25%") }}>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => {}}
              >
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor:
                      item === "Vegetables"
                        ? COLORS.lightGreen
                        : item === "Fruits"
                        ? COLORS.lightOrange
                        : item === "Milks & Egg"
                        ? COLORS.lightYellow
                        : COLORS.lightPurple,
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 5,
                  }}
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
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: wp(SIZES.small),
                    color: COLORS.dark2,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        horizontal
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
