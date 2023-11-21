export type RequestMethod = "post" | "get" | "put" | "delete";

export interface RequestParams {
  method: RequestMethod;
  url: string;
  maxBodyLength?: number;
  data?: Record<string, string>;
}
