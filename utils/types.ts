import type { StyleProp, ViewStyle } from "react-native";

export type RequestMethod = "post" | "get" | "put" | "delete";

export interface RequestParams {
  method: RequestMethod;
  url: string;
  maxBodyLength?: number;
  data?: Record<string, string>;
}

export interface PostParams<T> {
  method: RequestMethod;
  url: string;
  maxBodyLength?: number;
  data: T;
}

export interface BodyParams {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  dob?: string;
}

export interface DataParams {
  name: string;
  phoneNumber: string;
  countryCode: string;
  email: string;
  password: string;
  dob?: string;
}

export interface Product {
  price: number;
  image: string;
  images: string[];
  brand: string;
  inStock: boolean;
  rating: string;
  numReviews: number;
  isFeatured: boolean;
  _id: string;
  name: string;
  description: string;
  quantity: string;
  __v?: number;
  dateCreated: string;
}

export interface TotalPriceData {
  name: string;
  price: string;
}

export interface PaymentMethods {
  title: string;
  handlePress: () => void;
}

export interface CartItemData {
  products: ProductWithUnits[];
  items: number;
  total: number;
}

export interface ProductWithUnits extends Product {
  units: number;
}

export interface UserData {
  status: string;
  msg: string;
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dob: string;
    role: string;
    createdAt: string;
  };
  token: string;
}

export interface OrderData {
  orderItems: {
    product: string;
    quantity: number;
  }[];
  phone: string;
  country: string;
  zip: string;
  city: string;
  user: string;
}

export interface CatResponse {
  status: string;
  categories: Category[];
}

export interface Category {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  __v: number;
}

export interface SVGStyleProps {
  style?: StyleProp<ViewStyle>;
}

export interface ButtonProps {
  label: string;
  onPress: () => void;
}
