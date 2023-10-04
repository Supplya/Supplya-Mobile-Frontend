import { IMAGES } from "@const/images";

type WelcomeData = {
  id: string;
  title: string;
  description: string;
  image: string | null;
};

export const welcomeData: WelcomeData[] = [
  {
    id: "1",
    title: "Buy",
    description: "Select from a wide range of products and verified suppliers",
    image: IMAGES.supplya1,
  },
  {
    id: "2",
    title: "Pay",
    description:
      "Pay securely from your wallet, bank, card or Mobile Money and get SME loans to grow your business.",
    image: IMAGES.supplya2,
  },
  {
    id: "3",
    title: "Sell",
    description:
      "List products for free. Manage inventory, customers and orders",
    image: IMAGES.supplya1,
  },
  {
    id: "4",
    title: "Fulfil",
    description:
      "Insure, track and manage last mile order deliveries seamlessly",
    image: IMAGES.supplya2,
  },
  {
    id: "5",
    title: "Get \nStarted",
    description: "Enter your email address or phone number to login or sign up",
    image: null,
  },
];
