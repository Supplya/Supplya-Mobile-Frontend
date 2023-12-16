import BackButton from "@comp/header/BackButton";
import { COLORS } from "@const/theme";
import { Stack, router } from "expo-router";
import { globalStyles } from "styles/global";

export default function PaymentLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="order-summary"
        options={{
          title: "Order Summary",
          headerTitleStyle: {
            ...globalStyles.headerFont,
          },
          headerLeft: () => <BackButton onPress={router.back} />,
          headerStyle: {
            backgroundColor: COLORS.offWhite,
          },
        }}
      />
      <Stack.Screen
        name="checkout"
        options={{
          title: "Checkout",
          headerTitleStyle: {
            ...globalStyles.headerFont,
          },
          headerLeft: () => <BackButton onPress={router.back} />,
          headerStyle: {
            backgroundColor: COLORS.offWhite,
          },
        }}
      />
      <Stack.Screen
        name="order-success"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
