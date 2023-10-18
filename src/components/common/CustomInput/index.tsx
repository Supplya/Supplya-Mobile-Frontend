import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SIZES } from "@const/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";

const CustomInput = ({
  title,
  control,
  name,
  secureTextEntry = false,
  flex = 1,
  type = "",
  rules = {},
  pairInput = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <View style={[styles.container, pairInput && { flex: flex }]}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => {
          return (
            <>
              <View
                style={[
                  styles.inputView,
                  {
                    borderColor: error
                      ? COLORS.orange
                      : isFocused
                      ? COLORS.primary
                      : COLORS.gray5,
                  },
                ]}
              >
                {type === "password" ? (
                  <>
                    <TextInput
                      placeholder={title}
                      placeholderTextColor={COLORS.gray5}
                      style={styles.input}
                      onChangeText={onChange}
                      autoCapitalize="none"
                      keyboardType={!isVisible ? "default" : "visible-password"}
                      secureTextEntry={!isVisible}
                      onBlur={() => {
                        setIsFocused(false);
                        onBlur();
                      }}
                      onFocus={() => {
                        setIsFocused(true);
                      }}
                      value={value}
                    />
                    <TouchableOpacity
                      style={{ marginRight: 16 }}
                      onPress={toggleVisibility}
                    >
                      <Ionicons
                        name={
                          isVisible ? "md-eye-off-outline" : "md-eye-outline"
                        }
                        size={20}
                        color={COLORS.gray}
                      />
                    </TouchableOpacity>
                  </>
                ) : type === "countryCode" ? (
                  <TextInput
                    placeholder={title}
                    placeholderTextColor={COLORS.gray5}
                    style={styles.input}
                    maxLength={4}
                    keyboardType="phone-pad"
                    onChangeText={onChange}
                    textContentType="telephoneNumber"
                    secureTextEntry={secureTextEntry}
                    onBlur={() => {
                      setIsFocused(false);
                      onBlur();
                    }}
                    onFocus={() => {
                      setIsFocused(true);
                    }}
                    value={value}
                  />
                ) : type === "phoneNumber" ? (
                  <TextInput
                    placeholder={title}
                    placeholderTextColor={COLORS.gray5}
                    style={styles.input}
                    maxLength={11}
                    keyboardType="phone-pad"
                    onChangeText={onChange}
                    textContentType="telephoneNumber"
                    secureTextEntry={secureTextEntry}
                    onBlur={() => {
                      setIsFocused(false);
                      onBlur();
                    }}
                    onFocus={() => {
                      setIsFocused(true);
                    }}
                    value={value}
                  />
                ) : type === "email" ? (
                  <TextInput
                    placeholder={title}
                    placeholderTextColor={COLORS.gray5}
                    style={styles.input}
                    onChangeText={onChange}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    onBlur={() => {
                      setIsFocused(false);
                      onBlur();
                    }}
                    onFocus={() => {
                      setIsFocused(true);
                    }}
                    value={value}
                  />
                ) : (
                  <TextInput
                    placeholder={title}
                    placeholderTextColor={COLORS.gray5}
                    style={styles.input}
                    onChangeText={onChange}
                    onBlur={() => {
                      setIsFocused(false);
                      onBlur();
                    }}
                    onFocus={() => {
                      setIsFocused(true);
                    }}
                    value={value}
                  />
                )}
              </View>
              {error && error?.ref.name !== "countryCode" && (
                <Text style={styles.error} numberOfLines={1}>
                  {error && error.message}
                </Text>
              )}
            </>
          );
        }}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 15,
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: wp(SIZES.medium),
    lineHeight: wp(SIZES.medium) * 1.57,
    marginBottom: 5,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.gray5,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.medium2),
    flex: 1,
  },
  error: {
    fontFamily: FONTS.regular,
    fontSize: wp(SIZES.small),
    color: COLORS.orange,
  },
});
