import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SpecialDealsCard from "@/components/common/SpecialDealsCard";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "@const/theme";

const SpecialDealsScreen = () => {
  console.log("Special deals screen rendered")
  const data = [0, 1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center", gap: 10 }}>
        {data?.map((_, index) => (
          <SpecialDealsCard width={95} key={index.toString()} />
        ))}
      </ScrollView>
    </View>
  );
};

export default SpecialDealsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
});
