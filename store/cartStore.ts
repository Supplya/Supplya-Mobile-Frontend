import { Product } from "utils/types";
import { create } from "zustand";

export interface CartState {
  products: Array<Product & { units: number }>;
  items: number;
  total: number;
  addProduct: (product: Product) => void;
  reduceProduct: (product: Product) => void;
  clearCart: () => void;
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

      if (productExists) {
        productExists.units += 1;
        return { products: [...state.products] };
      } else {
        return { products: [...state.products, { ...product, units: 1 }] };
      }
    });
  },
  reduceProduct: (product: Product) => {
    set((state) => {
      state.total -= product.price;
      state.items -= 1;
      return {
        products: state.products
          .map((p) => {
            if (p._id === product._id) {
              p.units -= 1;
            }
            return p;
          })
          .filter((p) => p.units > 0),
      };
    });
  },
  clearCart: () => set({ products: [], items: 0, total: 0 }),
}));

export default useCartStore;
