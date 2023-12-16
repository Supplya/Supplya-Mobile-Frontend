import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useRef, useState, useCallback } from "react";
import { COLORS, SIZES } from "@const/theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { router } from "expo-router";
import { globalStyles } from "styles/global";
import CustomButton from "@comp/common/CustomButton";
import TotalPrice from "@comp/common/TotalPrice";
import { OrderData } from "utils/types";
import CheckoutCard from "@comp/checkout/CheckoutCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import { paymentMethods } from "assets/data";
import useCartStore from "store/cartStore";
import useAuthStore from "store/authStore";
import axios from "axios";

const Checkout = () => {
  const { products, items, total, clearCart } = useCartStore();
  const { user } = useAuthStore();

  const footerRef = useRef<View>(null);
  const [footerHeight, setFooterHeight] = useState<number>(0);

  const createOrder = () => {
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

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://supplya.cyclic.app/api/v1/orders/create",
      // prettier-ignore
      headers: {
        "Content-Type": "application/json",
        "Authorization":
          `Bearer ${user.token}`,
      },
      data: orderData,
    };

    axios
      .request(config)
      .then((response) => {
        clearCart();
        console.log("Order created successfully");
        console.log(JSON.stringify(response.data));
        router.push("/order-success");
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          console.error("Response Status:", error.response.status);
          console.error("Response Headers:", error.response.headers);
          console.error("Response Data:", error.response.data);
          return Alert.alert("Error", error.response.data.msg);
        }
        Alert.alert("Error", "Something went wrong");
      });
  };

  const handleFooterLayout = useCallback(() => {
    footerRef.current?.measureInWindow((x, y, width, height) => {
      setFooterHeight(height);
    });
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, width: "100%", gap: 15, paddingBottom: footerHeight }}
      >
        <FlatList
          data={products}
          contentContainerStyle={{
            padding: wp(SIZES.medium),
            gap: 15,
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
          style={{ gap: wp(SIZES.medium), paddingHorizontal: wp(SIZES.medium) }}
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
                createOrder();
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
    backgroundColor: COLORS.separatorGray,
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
