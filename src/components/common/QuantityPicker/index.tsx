import { Text, View } from "react-native";
import React, { useState } from "react";
import Minus from "../Minus";
import { TouchableOpacity } from "react-native-gesture-handler";
import Plus from "../Plus";
import { COLORS } from "@const/theme";
import { globalStyles } from "styles/global";
import styles from "./quantitypicker.style";

const QuantityPicker = () => {
  const [count, setCount] = useState(0);

  function increaseQuantity(): void {
    setCount(count + 1);
  }

  function decreaseQuantity(): void {
    if (count >= 1) {
      setCount(count - 1);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
        <Minus />
      </TouchableOpacity>
      <View style={styles.countView}>
        <Text style={[globalStyles.fontBold16, { color: COLORS.labelDark }]}>
          {count}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
        <Plus />
      </TouchableOpacity>
    </View>
  );
};

export default QuantityPicker;
