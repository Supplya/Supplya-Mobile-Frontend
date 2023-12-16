import { setCartItems } from "utils";
import { CartItemData, Product, ProductWithUnits } from "utils/types";
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface CartState {
  products: ProductWithUnits[];
  items: number;
  total: number;
  addProduct: (product: Product) => void;
  reduceProduct: (product: Product) => void;
  clearCart: () => void;
  getCartItem: () => void;
}

const useCartStore = create<CartState>()((set) => ({
  products: [],
  items: 0,
  total: 0,
  addProduct: (product: Product) => {
    set((state) => {
      state.items += 1;
      state.total += product.price;
      const productExists = state.products.find((p) => p._id === product._id);
      let updatedProducts: ProductWithUnits[];

      // If product already exists in the cart
      if (productExists) {
        productExists.units += 1;

        updatedProducts = [...state.products];

        setCartItems({
          products: updatedProducts,
          items: state.items,
          total: state.total,
        });

        console.warn("Add products to the cart");
        return { products: updatedProducts };
      } else {
        updatedProducts = [...state.products, { ...product, units: 1 }];
        setCartItems({
          products: updatedProducts,
          items: state.items,
          total: state.total,
        });
        console.warn("Add new product to the cart");
        return { products: updatedProducts };
      }
    });
  },
  reduceProduct: (product: Product) => {
    set((state) => {
      state.total -= product.price;
      state.items -= 1;

      const updatedProducts = state.products
        .map((p) => {
          if (p._id === product._id) {
            p.units -= 1;
          }
          return p;
        })
        .filter((p) => p.units > 0);

      setCartItems({
        products: updatedProducts,
        items: state.items,
        total: state.total,
      });
      console.warn("Reduce products in the cart");
      return {
        products: updatedProducts,
      };
    });
  },
  clearCart: () => {
    const updatedCart = { products: [], items: 0, total: 0 };
    setCartItems(updatedCart);
    console.warn("Clear all cart items");
    set(updatedCart);
  },
  getCartItem: async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("cartItems");
      if (jsonValue !== null) {
        console.log("Existing cart items successfully retrieved");
        const currentCart: CartItemData = JSON.parse(jsonValue);
        set({
          products: currentCart.products,
          items: currentCart.items,
          total: currentCart.total,
        });
      } else {
        console.log("Cart items is empty");
        set({ products: [], items: 0, total: 0 });
      }
    } catch (error) {
      console.log("Error occured getting cart items:", error);
    }
  },
}));

export default useCartStore;
