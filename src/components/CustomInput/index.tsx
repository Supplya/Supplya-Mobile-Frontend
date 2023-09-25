import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "@const/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Controller } from "react-hook-form";

const CustomInput = ({ title, control, name, rules = {} }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value, ref },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              style={styles.inputView}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
            <Text style={styles.error}>{error && error.message}</Text>
          </>
        )}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginBottom: 10,
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: wp(SIZES.medium),
    lineHeight: wp(SIZES.medium) * 1.57,
    marginBottom: 5,
  },
  inputView: {
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    width: "100%",
  },
  error: {
    // height: wp("3%") * 1.1,
    fontFamily: FONTS.regular,
    fontSize: wp("3%"),
    color: COLORS.red,
  }
});
