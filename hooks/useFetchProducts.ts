import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import useAuthStore from "store/authStore";
import { Product } from "utils/types";

type RequestMethod = "post" | "get" | "put" | "delete";

export interface RequestParams {
  method: RequestMethod;
  url: string;
  maxBodyLength?: number;
}

export interface ProductData {
  products: Product[];
  count: number;
}

const useFetchProducts = (options: RequestParams) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ProductData>({ count: 0, products: [] });
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
    fetchData();
  }, []);

  return { data, isLoading, error, fetchData };
};

export default useFetchProducts;
