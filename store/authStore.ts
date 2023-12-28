import axios, { AxiosResponse } from "axios";
import { UserData } from "utils/types";
import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";

interface SignUpDetails {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  dob: string;
}

interface LoginDetails {
  email: string;
  password: string;
}

export interface AuthStore {
  isLoading: boolean;
  user: UserData | null;
  setUser: (userData: UserData) => void;
  error: Error | null;
  signUp: (data: SignUpDetails) => void;
  signIn: (data: LoginDetails) => void;
  signOut: () => void;
  setIsLoading: (isLoading: boolean) => void;
  getUserData: () => void;
}

const apiKey = "supplyaToken";

const useAuthStore = create<AuthStore>()((set) => ({
  isLoading: false,
  user: null,
  error: null,
  setUser: (userData: UserData) => {
    set({ user: userData });
  },
  signUp: (data: SignUpDetails) => {
    // Set loading to true before making the request
    set({ isLoading: true });
    console.log("Loading");
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://supplya.cyclic.app/api/v1/auth/register",
      // prettier-ignore
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      data,
    };

    axios
      .request(config)
      .then((response: AxiosResponse<UserData, string>) => {
        const userData = response.data;
        const serializedData = JSON.stringify(userData);

        // Store user information in secure storage
        SecureStore.setItemAsync("userData", serializedData);
        set({ user: userData, isLoading: false });
        set({ isLoading: false });
        router.push("/home");
      })
      .catch((error) => {
        console.log(error);
        set({ error: error });
        set({ isLoading: false });
      });
  },
  signIn: (data: LoginDetails) => {
    // Set loading to true before making the request
    set({ isLoading: true });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://supplya.cyclic.app/api/v1/auth/login",
      // prettier-ignore
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      data: data,
    };
    axios
      .request(config)
      .then((response: AxiosResponse<UserData, string>) => {
        const userData: UserData = response.data;
        const serializedData = JSON.stringify(userData);

        // Store user information in secure storage
        SecureStore.setItemAsync("userData", serializedData);
        set({ user: userData, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
        set({ error: error });
      });
    set({ isLoading: false });
  },
  signOut: () => {
    set({ user: null });
  },
  setIsLoading: (loading) => {
    set({ isLoading: loading });
  },
  getUserData: async () => {
    try {
      const jsonValue = await SecureStore.getItemAsync("userData");
      if (jsonValue !== null) {
        console.log("Existing user data successfully retrieved");
        const userData = JSON.parse(jsonValue);
        set({
          user: userData,
        });
      } else {
        console.log("No user data stored");
        set({ user: null });
      }
    } catch (error) {
      console.log("Error occured getting user data:", error);
    }
  },
}));

export default useAuthStore;
