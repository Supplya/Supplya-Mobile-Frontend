import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import OrderSummaryCard from "@comp/ordersummary/OrderSummaryCard";
import { COLORS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { router } from "expo-router";
import { globalStyles } from "styles/global";
import { FlatList } from "react-native";
import CustomButton from "@comp/common/CustomButton";

const OrderSummary = () => {
  const [selected, setSelected] = useState(-1);

  const data = ["0", "1", "2"];
  const gross = [
    { name: "Sub total Price", price: "$155" },
    { name: "Delivery Fee", price: "$8" },
    { name: "TanahAir Voucher", price: "None" },
    { name: "Total price", price: "$163" },
  ];

  function handleSelected(index) {}

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, width: "100%" }}
      >
        <FlatList
          data={data}
          style={{ flex: 1, width: "100%" }}
          contentContainerStyle={styles.content}
          renderItem={({ item, index }) => (
            <View
              style={[
                { width: "100%" },
                index < data?.length - 1 && { marginBottom: wp(SIZES.medium) },
              ]}
            >
              <OrderSummaryCard item={item} />
            </View>
          )}
          keyExtractor={(item) => item}
          ListFooterComponent={() => (
            <>
              <View style={styles.separator} />

              <Text style={styles.promoTitle}>Promo Code</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Enter Promo Code"
                  placeholderTextColor={COLORS.labelGray2}
                  style={styles.input}
                />
                <TouchableOpacity onPress={() => console.log("Pressed")}>
                  <Text style={styles.applyText}>APPLY</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator} />
              {gross?.map((item) => (
                <View style={styles.totalView}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              ))}
              <View style={styles.checkoutBtn}>
                <CustomButton
                  title="Checkout"
                  onPress={() => router.push("/checkout")}
                />
              </View>
            </>
          )}
          ListFooterComponentStyle={{ width: "100%" }}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.offWhite,
  },
  content: {
    paddingHorizontal: wp(SIZES.medium),
    paddingTop: wp(SIZES.medium),
    width: "100%",
    alignItems: "center",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.separatorGray,
    marginVertical: 20,
  },
  promoTitle: {
    ...globalStyles.fontRegular16,
    color: COLORS.labelGray1,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.graySeparator2,
  },
  input: {
    flex: 1,
    ...globalStyles.fontRegular16,
    color: COLORS.labelDark,
  },
  applyText: {
    ...globalStyles.fontBold16,
    color: COLORS.primary,
  },
  totalView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  name: {
    ...globalStyles.fontRegular16,
    color: COLORS.graySeparator1,
  },
  price: {
    ...globalStyles.fontBold16,
    color: COLORS.labelDark,
  },
  checkoutBtn: {
    marginVertical: 20,
  },
});
