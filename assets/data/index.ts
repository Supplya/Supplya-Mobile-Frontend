import { PaymentMethods, TotalPriceData } from "utils/types";

export const gross: TotalPriceData[] = [
  { name: "Sub total Price", price: "$155" },
  { name: "Delivery Fee", price: "$8" },
  { name: "TanahAir Voucher", price: "None" },
  { name: "Total price", price: "$163" },
];

export const paymentMethods: PaymentMethods[] = [
  {
    title: "Pay with PayStack",
    handlePress: () => {},
  },
  {
    title: "Pay with Wallet",
    handlePress: () => {},
  },
  {
    title: "Pay with **** 2456",
    handlePress: () => {},
  },
];
