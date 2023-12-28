import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartItemData, OrderData } from "./types";
import axios from "axios";
import { router } from "expo-router";
import { Alert } from "react-native";

export function separateAtWhitespace(name: string) {
  if (name !== undefined) {
    const spaceIndex = name.indexOf(" ");

    let firstName: string;
    let lastName: string;
    // Check if a whitespace was found
    if (spaceIndex !== -1) {
      // Split the string into two parts using substring
      firstName = name.substring(0, spaceIndex);
      lastName = name.substring(spaceIndex + 1);

      // Alternatively, you can return the result
    } else {
      // If no whitespace found, handle accordingly
      console.log("No whitespace found in the input string.");
      firstName = name;
      lastName = "";
    }
    return { firstName, lastName };
  }
  return { firstName: "" };
}

export const setCartItems = async (cartData: CartItemData) => {
  try {
    const serializedProducts = JSON.stringify(cartData);
    await AsyncStorage.setItem("cartItems", serializedProducts);
    console.log("cart items saved successfully");
  } catch (e) {
    console.log("Error occured:", e);
  }
};

export const createOrder = async (
  token: string,
  orderData: OrderData,
  clearCart: () => void
) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://supplya.cyclic.app/api/v1/orders/create",
    // prettier-ignore
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    data: orderData,
  };
  try {
    const response = await axios.request(config);
    console.log("🚀 ~ file: index.ts:61 ~ response:", response);
    clearCart();
    console.log("Order created successfully");
    router.push("/order-success");
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.error("Response Status:", error.response.status);
      console.error("Response Headers:", error.response.headers);
      console.error("Response Data:", error.response.data);
      return Alert.alert("Error", error.response.data.msg);
    }
    Alert.alert("Error", "Something went wrong");
  }
};
