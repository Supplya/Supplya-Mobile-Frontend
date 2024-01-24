import { View, Text } from "react-native";
import React from "react";
import styles from "./headertitle.style";

interface HeaderTitleProps {
  firstName: string;
  lastName: string;
}
const HeaderTitle = ({ firstName, lastName }: HeaderTitleProps) => {
  const fullName = firstName + " " + lastName;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{fullName}</Text>
      <Text style={styles.subtitle}>User Address, Lagos, Nigeria</Text>
    </View>
  );
};

export default HeaderTitle;
