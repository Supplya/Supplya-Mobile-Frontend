export type RequestMethod = "post" | "get" | "put" | "delete";

export interface RequestParams {
  method: RequestMethod;
  url: string;
  maxBodyLength?: number;
  data?: Record<string, string>;
}

export interface BodyParams {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  dob?: string;
}

export interface DataParams {
  name: string;
  phoneNumber: string;
  countryCode: string;
  email: string;
  password: string;
  dob?: string;
}

export interface Product {
  price: number;
  image: string;
  images: string[];
  brand: string;
  inStock: boolean;
  rating: string;
  numReviews: number;
  isFeatured: boolean;
  _id: string;
  name: string;
  description: string;
  quantity: string;
  __v: number;
  dateCreated: string;
}
