import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "@const/theme";
import HeaderTitle from "@comp/header/HeaderTitle";
import Search from "@/components/common/Search";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { globalStyles } from "styles/global";

const CustomHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <HeaderTitle />
          <TouchableOpacity style={styles.button} onPress={openSearchBar}>
            <Search />
          </TouchableOpacity>
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
              style={{
                flex: 1,
                padding: 1,
                paddingLeft: 8,
                ...globalStyles.fontRegular14,
                lineHeight: 22,
              }}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.offWhite,
    height: 85,
    paddingHorizontal: wp(SIZES.medium2),
    alignItems: "flex-end",
  },
  searchView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    width: "100%",
  },
  button: {
    padding: 5,
  },
});
