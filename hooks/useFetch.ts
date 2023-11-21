import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";

type RequestMethod = "post" | "get" | "put" | "delete";

type ContentType =
  | "application/json"
  | "application/octet-stream"
  | "text/plain";

export interface RequestParams {
  method: RequestMethod;
  url: string;
  maxBodyLength?: number;
  data?: any[];
}

const useFetch = (
  options: RequestParams,
  bodyData?: Record<string, string>
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Record<string, string>>();
  const [error, setError] = useState<string>();

  const config: AxiosRequestConfig = {
    ...options,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NTU2NGFlYjc3MDY4YTAwMWNhODY5ZmEiLCJmaXJzdE5hbWUiOiJkYXZpZCIsImxhc3ROYW1lIjoib3N1Y2h1a3d1IiwicGhvbmVOdW1iZXIiOiIwOTAxODA2NjY5NjQiLCJ1bmlxdWVLZXkiOjkyOTIsImVtYWlsIjoib3N1Y2h1a3d1ZGF2aWRAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJjcmVhdGVkQXQiOiIyMDIzLTExLTE2VDE3OjAxOjMxLjM0NVoiLCJkb2IiOiIxOTk5LTEyLTEwVDAwOjAwOjAwLjAwMFoiLCJpYXQiOjE3MDAxNzcxMjksImV4cCI6MTczMTcxMzEyOX0.viT8AQ3YqrHktOC9ILuD_KwfHPFFf39PnA2dtawIqQk",
    },
    data: bodyData,
  };

  async function fetchData() {
    setIsLoading(true);

    return axios
      .request(config)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Axios request error:", error);
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
