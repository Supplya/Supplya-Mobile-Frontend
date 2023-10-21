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
    </Stack>
  );
}
