import { Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "@const/theme";
import styles from "./collectioncard.style";

const CollectionCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text
        style={{ fontFamily: FONTS.medium, fontSize: 16, color: COLORS.dark }}
        ellipsizeMode="tail"
        numberOfLines={1}
      >
        {item}
      </Text>
    </View>
  );
};

export default CollectionCard;
