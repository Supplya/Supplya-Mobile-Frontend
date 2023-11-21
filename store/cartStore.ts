import { create } from "zustand";

export interface Product {
  id: number;
  price: number;
  image?: string;
  images?: string[];
  inStock: boolean;
  name: string;
  description: string;
}
export interface CartState {
  products: Array<Product & { quantity: number }>;
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
      const productExists = state.products.find((p) => p.id === product.id);

      if (productExists) {
        productExists.quantity += 1;
        return { products: [...state.products] };
      } else {
        return { products: [...state.products, { ...product, quantity: 1 }] };
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
            if (p.id === product.id) {
              p.quantity -= 1;
            }
            return p;
          })
          .filter((p) => p.quantity > 0),
      };
    });
  },
  clearCart: () => set({ products: [], items: 0, total: 0 }),
}));

export default useCartStore;
