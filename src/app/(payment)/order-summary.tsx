import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState, useRef, useEffect } from "react";
import OrderSummaryCard from "@comp/ordersummary/OrderSummaryCard";
import { COLORS, SIZES } from "@const/theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { router } from "expo-router";
import { globalStyles } from "styles/global";
import { FlatList } from "react-native";
import CustomButton from "@comp/common/CustomButton";
import TotalPrice from "@/components/common/TotalPrice";
import { TotalPriceData } from "utils/types";
import useCartStore from "store/cartStore";

const OrderSummary = () => {
  const footerRef = useRef<View>(null);

  const [footerHeight, setFooterHeight] = useState<number>(0);

  const [isEnabled, setIsEnabled] = useState(false);

  const { products, items, total } = useCartStore();

  const gross: TotalPriceData[] = [
    { name: "Sub total Price", price: "$155" },
    { name: "Delivery Fee", price: "$8" },
    { name: "TanahAir Voucher", price: "None" },
    { name: "Total price", price: "$163" },
  ];

  const handleFooterLayout = useCallback(() => {
    footerRef.current?.measureInWindow((x, y, width, height) => {
      setFooterHeight(height);
    });
  }, []);

  const toggleSwitch = useCallback(() => setIsEnabled(!isEnabled), [isEnabled]);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, width: "100%" }}
      >
        {items === 0 ? (
          <View style={styles.noItemView}>
            <Text style={styles.noItem}>No items in cart</Text>
          </View>
        ) : (
          <FlatList
            data={products}
            style={{ flex: 1, width: "100%" }}
            contentContainerStyle={[
              styles.content,
              { paddingBottom: footerHeight + 15 },
            ]}
            renderItem={({ item, index }) => (
              <View
                style={[
                  { width: "100%" },
                  index < products?.length - 1 && {
                    marginBottom: wp(SIZES.medium),
                  },
                ]}
              >
                <OrderSummaryCard product={item} />
              </View>
            )}
            keyExtractor={(item) => item._id}
          />
        )}
        <View
          style={styles.footer}
          onLayout={handleFooterLayout}
          ref={footerRef}
        >
          <View style={styles.separator} />
          <View>
            <Text style={styles.promoTitle}>Promo Code</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Enter Promo Code"
                placeholderTextColor={COLORS.gray2}
                style={styles.input}
              />
              <TouchableOpacity onPress={() => console.log("Pressed")}>
                <Text style={styles.applyText}>APPLY</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.insuranceView}>
              <Text style={styles.insuranceText}>Add Insurance (0.2%)</Text>
              <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
                trackColor={{
                  false: COLORS.gray2,
                  true: COLORS.lightGreen,
                }}
                thumbColor={isEnabled ? COLORS.primary : "#f4f3f4"}
              />
            </View>
            <View style={styles.separator} />
          </View>

          <TotalPrice total={total} />
          <View style={styles.checkoutBtn}>
            <CustomButton
              title="Checkout"
              onPress={() => {
                if (items) {
                  router.push("/checkout");
                } else {
                  Alert.alert("No items", "Add items to cart");
                }
              }}
            />
          </View>
        </View>
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
  noItemView: {
    height: hp(30),
    alignItems: "center",
    justifyContent: "center",
  },
  noItem: {
    ...globalStyles.fontMedium16,
  },
  content: {
    paddingHorizontal: wp(SIZES.medium),
    paddingTop: wp(SIZES.medium),
    width: "100%",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: wp(SIZES.medium),
    backgroundColor: COLORS.offWhite,
    gap: 15,
    paddingBottom: 15,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.gray4,
  },
  promoTitle: {
    ...globalStyles.fontRegular16,
    color: COLORS.gray,
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
    borderColor: COLORS.gray4,
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
  insuranceView: {
    flexDirection: "row",
    alignItems: "center",
  },
  insuranceText: {
    flex: 1,
    ...globalStyles.fontBold16,
  },

  checkoutBtn: {},
});
