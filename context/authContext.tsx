import { StyleSheet, Text, View } from "react-native";
import React, { createContext } from "react";
import useAuthStore from "store/authStore";
import { UserData } from "utils/types";

const authUser = (currentUser: UserData) => {
  console.log("New texts", currentUser);
};

const AuthUser = ({ children }) => {
  const { user } = useAuthStore();
  authUser(user);
  return children;
};

export default AuthUser;

const styles = StyleSheet.create({});
