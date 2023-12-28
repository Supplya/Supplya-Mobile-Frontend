import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import useAuthStore from "store/authStore";
import { PostParams, Product } from "utils/types";

type RequestMethod = "post" | "get" | "put" | "delete";

const usePost = <T>(options: PostParams<T>, data: T) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<T>();
  const [error, setError] = useState<string>();

  const { user } = useAuthStore();

  const apiToken = user.token;

  const config: AxiosRequestConfig = {
    ...options,
    // prettier-ignore
    headers: {
      "Authorization": `Bearer ${apiToken}`,
      "Content-Type": "application/json",
    },
  };

  async function postData() {
    setIsLoading(true);
    setError("");
    axios
      .request(config)
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.error("Axios request error:", error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(
            "Server responded with a non-success status:",
            error.response.status
          );
          console.log("Response data:", error.response.data);
          console.log("Response headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("No response received from the server");
          console.log("Request data:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error setting up the request:", error.message);
        }
        console.log("Error config:", error.config);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    postData();
  }, []);

  return { responseData, isLoading, error, postData };
};

export default usePost;
