import { router, useSegments } from "expo-router";
import { useEffect } from "react";
import useAuthStore from "store/authStore";
import { UserData } from "utils/types";

// Ensures the user on accesses the app once they have been authenticated
const useProtectedRoute = (currentUser: UserData) => {
  const segments = useSegments();

  const inAuthRoute = segments[0] === "(auth)"; // Sets boolean to true if you are in an auth screen

  const navigate = () => {
    // If authentication is not successful and it is not in the auth route, it navigates to login
    if (!currentUser && !inAuthRoute) {
      router.replace("/login");

      // If it is successful it checks navigates to chatlist only if the app has just been opened
    } else if (segments[0] === undefined) {
      router.replace("/home");

      // If user is in the authentication screen and login is successful, it navigates to the chat list screen
    } else if (inAuthRoute && currentUser) {
      router.replace("/home");
    }
  };

  useEffect(() => {
    navigate();
  }, [currentUser]);
};

const AuthUser = ({ children }) => {
  const { user } = useAuthStore();
  console.log("auth user called");
  useProtectedRoute(user);
  return children;
};

export default AuthUser;
