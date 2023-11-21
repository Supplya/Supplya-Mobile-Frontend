import axios, { AxiosRequestConfig } from "axios";
import { Dispatch, SetStateAction } from "react";

export function separateAtWhitespace(name: string) {
  if (name !== undefined) {
    const spaceIndex = name.indexOf(" ");

    let firstName: string;
    let lastName: string;
    // Check if a whitespace was found
    if (spaceIndex !== -1) {
      // Split the string into two parts using substring
      firstName = name.substring(0, spaceIndex);
      lastName = name.substring(spaceIndex + 1);

      // Alternatively, you can return the result
    } else {
      // If no whitespace found, handle accordingly
      console.log("No whitespace found in the input string.");
      firstName = name;
      lastName = "";
    }
    return { firstName, lastName };
  }
  return { firstName: "" };
}

export function makeAPICall(
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setResponseData: Dispatch<SetStateAction<Record<string, string>>>,
  setError: Dispatch<SetStateAction<string>>,
  config: AxiosRequestConfig
): Promise<void> {
  setIsLoading(true);

  return axios
    .request(config)
    .then((response) => {
      setResponseData(response.data);
      console.log(
        "🚀 ~ file: index.ts:39 ~ .then ~ response.data:",
        response.data
      );
    })
    .catch((error) => {
      console.error("Axios request error:", error);
      setError(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
}
