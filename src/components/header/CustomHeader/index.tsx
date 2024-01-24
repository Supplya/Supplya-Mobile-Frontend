import { View, TouchableOpacity, TextInput, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "@const/theme";
import HeaderTitle from "@comp/header/HeaderTitle";
import Search from "@/components/common/Search";
import { globalStyles } from "styles/global";
import { Link } from "expo-router";
import styles from "./customheader.style";
import Cart from "@/components/details/Cart";
import useAuthStore from "store/authStore";

const CustomHeader = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useAuthStore();

  const openSearchBar = () => {
    setIsOpen(true);
  };

  const closeSearchBar = () => {
    setIsOpen(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      {!isOpen ? (
        <View style={styles.searchView}>
          <HeaderTitle
            firstName={user.user.firstName}
            lastName={user.user.lastName}
          />
          <View style={styles.iconView}>
            <Link href="/cart" asChild>
              <TouchableOpacity style={styles.button}>
                <Cart />
              </TouchableOpacity>
            </Link>
            <TouchableOpacity style={styles.button} onPress={openSearchBar}>
              <Search />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.searchView}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: COLORS.tertiaryGray,
              padding: 11,
              borderRadius: 8,
            }}
          >
            <Search color={COLORS.gray4} />
            <TextInput
              placeholder="Search for Anything"
              placeholderTextColor={COLORS.gray4}
              style={styles.input}
            />
          </View>
          <TouchableOpacity onPress={closeSearchBar}>
            <Text style={{ ...globalStyles.fontSemiBold16 }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CustomHeader;
