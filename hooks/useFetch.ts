import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import useAuthStore from "store/authStore";
import { RequestParams } from "utils/types";

const useFetch = <T>(options: RequestParams) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<T>(undefined);
  const [error, setError] = useState<string>();

  const { user } = useAuthStore();

  const apiToken = user?.token;

  const config: AxiosRequestConfig = {
    ...options,
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  };

  async function fetchData() {
    setIsLoading(true);
    setError("");
    axios
      .request(config)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Axios request error:", error);
        if (error.response) {
          console.error("Response Status:", error.response.status);
          console.error("Response Headers:", error.response.headers);
          console.error("Response Data:", error.response.data);
        }
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error, fetchData };
};

export default useFetch;
