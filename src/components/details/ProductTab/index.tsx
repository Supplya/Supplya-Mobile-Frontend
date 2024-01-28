import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./producttab.style";
import { globalStyles } from "styles/global";

const ProductTab = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <View style={styles.container}>
      {tabs?.map((title: string, index: number) => (
        <>
          <TouchableOpacity
            style={[
              styles.button,
              activeTab !== title && {
                backgroundColor: "transparent",
                elevation: 0,
              },
            ]}
            disabled={activeTab === title ? true : false}
            onPress={() => setActiveTab(title)}
            key={index.toString()}
          >
            <Text style={[globalStyles.fontSemiBold14, styles.text]}>
              {title}
            </Text>
          </TouchableOpacity>

          {index === 0 && (
            <View style={styles.separator} key={index.toString() + "a"} />
          )}
        </>
      ))}
    </View>
  );
};

export default ProductTab;
