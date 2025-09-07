import { create } from "zustand";

const useStore = create((set) => ({
  cart: [],
  orders: JSON.parse(localStorage.getItem("orders")) || [],

  addToCart: (item) =>
    set((state) => ({ cart: [...state.cart, item] })),

  clearCart: () => set({ cart: [] }),

  checkout: () =>
    set((state) => {
      if (state.cart.length === 0) return state;

      const newOrder = {
        id: Date.now(),
        items: state.cart,
        createdAt: new Date().toLocaleString(),
      };

      const newOrders = [...state.orders, newOrder];
      localStorage.setItem("orders", JSON.stringify(newOrders));

      return { cart: [], orders: newOrders };
    }),
}));

export default useStore;
