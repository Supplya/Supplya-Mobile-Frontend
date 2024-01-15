import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Modal,
  ActivityIndicator,
} from "react-native";
import React, { useRef, useState, useCallback } from "react";
import { COLORS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { router } from "expo-router";
import { globalStyles } from "styles/global";
import CustomButton from "@comp/common/CustomButton";
import TotalPrice from "@comp/common/TotalPrice";
import { OrderData, PostParams } from "utils/types";
import CheckoutCard from "@comp/checkout/CheckoutCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import { paymentMethods } from "assets/data";
import useCartStore from "store/cartStore";
import useAuthStore from "store/authStore";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { createOrder } from "utils";

const Checkout = () => {
  // Store variables
  const { products, items, total, clearCart } = useCartStore();
  const { user } = useAuthStore();

  // State variables
  const [footerHeight, setFooterHeight] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // useRef variables
  const footerRef = useRef<View>(null);
  const paystackRef = useRef<paystackProps.PayStackRef>(null);

  // order data
  const orderItems = [
    ...products.map((item) => ({ product: item._id, quantity: item.units })),
  ];
  const orderData: OrderData = {
    orderItems,
    phone: user.user.phoneNumber,
    country: "Nigeria",
    zip: "501721",
    city: "Abuja",
    user: user.user._id,
  };

  const handleFooterLayout = useCallback(() => {
    footerRef.current?.measureInWindow((x, y, width, height) => {
      setFooterHeight(height);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Modal visible={isVisible} statusBarTranslucent transparent>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.seeThrough,
          }}
        >
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      </Modal>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          flex: 1,
          width: "100%",
          gap: wp(SIZES.extraSmall),
          paddingBottom: footerHeight + wp(SIZES.extraSmall),
        }}
      >
        <Paystack
          paystackKey="pk_test_58c4e5396a1b0b3f3d3c9e0100d0b1348affa82d"
          amount={total.toString()}
          billingEmail={user?.user.email}
          activityIndicatorColor={COLORS.red}
          onCancel={(e) => {
            console.log("Canceled", e);
            router.back();
          }}
          onSuccess={async (res) => {
            console.log("Success", res);
            setIsVisible(true);
            await createOrder(user?.token, orderData, clearCart);
            setIsVisible(false);
          }}
          // @ts-expect-error
          ref={paystackRef}
        />
        <FlatList
          data={products}
          contentContainerStyle={{
            padding: wp(SIZES.medium),
            gap: wp(SIZES.medium),
          }}
          renderItem={({ item }) => (
            <CheckoutCard name={item.name} units={item.units} />
          )}
        />

        <View style={styles.addressCard}>
          <View style={styles.addressView}>
            <Text style={styles.deliveryText}>Delivery Address</Text>
            <Text style={styles.address}>17, Oremeta Str, Ikeja</Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="close-outline" size={24} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            gap: wp(SIZES.verySmall),
            paddingHorizontal: wp(SIZES.medium),
          }}
        >
          {paymentMethods?.map((item, index) => (
            <TouchableOpacity
              style={styles.paymentCard}
              key={index.toString()}
              onPress={item.handlePress}
            >
              <View style={styles.box} />
              <Text style={styles.paymentMethod}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={styles.footer}
          ref={footerRef}
          onLayout={handleFooterLayout}
        >
          <View style={styles.separator} />
          <View>
            <TotalPrice total={total} />
          </View>
          <View style={{ paddingBottom: 15 }}>
            <CustomButton
              title="Pay Now"
              onPress={() => {
                paystackRef.current?.startTransaction();
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.offWhite,
  },
  addressCard: {
    flexDirection: "row",
    marginHorizontal: wp(SIZES.medium),
    padding: wp(SIZES.medium / 2),
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 8,
    elevation: 1,
  },
  addressView: {
    flex: 1,
  },
  deliveryText: {
    ...globalStyles.fontBold16,
    lineHeight: 21,
  },
  address: {
    ...globalStyles.fontBold16,
    color: COLORS.gray4,
  },
  paymentCard: {
    flexDirection: "row",
    padding: wp(SIZES.medium / 2),
    backgroundColor: COLORS.white,
    alignItems: "center",
    gap: wp(SIZES.medium),
    elevation: 1,
    borderRadius: 8,
  },
  box: {
    height: 48,
    width: 48,
    backgroundColor: COLORS.systemGray,
    borderRadius: 8,
  },
  paymentMethod: {
    ...globalStyles.fontBold16,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.gray4,
  },
  footer: {
    paddingHorizontal: wp(SIZES.medium),
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    gap: 15,
  },
});
