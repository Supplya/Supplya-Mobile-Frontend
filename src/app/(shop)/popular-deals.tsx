import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "@const/theme";
import { ScrollView } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import FeaturedCard from "@comp/common/FeaturedCard";

const Deals = () => {
  console.log("Popular deals screen rendered");
  const data = [0, 1, 2, 3, 4, 5, 6];
  const [selected, setSelected] = useState(undefined);

  function handleSelected(index) {
    setSelected(index);
  }
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} style={{ flex: 1 }}>
        {data?.map((_, index) => (
          <FeaturedCard
            key={index.toString()}
            index={index}
            selected={selected}
            setSelected={handleSelected}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.offWhite,
  },
  content: {
    paddingHorizontal: wp(5),
    alignItems: "center",
    gap: 10,
    minHeight: hp(100),
  },
});
