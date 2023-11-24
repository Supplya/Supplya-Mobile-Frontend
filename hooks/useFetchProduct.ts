import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { Product } from "utils/types";

type RequestMethod = "post" | "get" | "put" | "delete";

export interface RequestParams {
  method: RequestMethod;
  url: string;
  maxBodyLength?: number;
}

const useFetchProduct = (options: RequestParams) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Product>(undefined);
  const [error, setError] = useState<string>();

  const config: AxiosRequestConfig = {
    ...options,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NTU2NGFlYjc3MDY4YTAwMWNhODY5ZmEiLCJmaXJzdE5hbWUiOiJkYXZpZCIsImxhc3ROYW1lIjoib3N1Y2h1a3d1IiwicGhvbmVOdW1iZXIiOiIwOTAxODA2NjY5NjQiLCJ1bmlxdWVLZXkiOjkyOTIsImVtYWlsIjoib3N1Y2h1a3d1ZGF2aWRAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJjcmVhdGVkQXQiOiIyMDIzLTExLTE2VDE3OjAxOjMxLjM0NVoiLCJkb2IiOiIxOTk5LTEyLTEwVDAwOjAwOjAwLjAwMFoiLCJpYXQiOjE3MDAxNzcxMjksImV4cCI6MTczMTcxMzEyOX0.viT8AQ3YqrHktOC9ILuD_KwfHPFFf39PnA2dtawIqQk",
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

export default useFetchProduct;
