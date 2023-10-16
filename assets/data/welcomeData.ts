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
    title: "Welcome to \n Veggie Fresh",
    description: "Grab your items only need to order from home, click pay and wait for thecourier to arrive",
    image: IMAGES.onboarding1,
  },
  {
    id: "2",
    title: "Easy Shopping",
    description:
      "Grab your items only need to order from home, click pay and wait for the courier to arrive",
    image: IMAGES.onboarding2,
  },
  {
    id: "3",
    title: "Easy Shopping",
    description:
      "Grab your items only need to order from home, click pay and wait for the courier to arrive",
    image: IMAGES.onboarding3,
  },
  {
    id: "4",
    title: "Easy Shopping",
    description:
      "Grab your items only need to order from home, click pay and wait for the courier to arrive",
    image: IMAGES.onboarding4,
  },
];
