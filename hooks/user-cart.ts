import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";

export interface CartItem extends Product {
  cartItemQuantity: number;
}

interface CartStore {
  items: CartItem[];
  totalCartItemsPrice: number;
  addItem: (data: CartItem) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  increaseItemQuantity: (id: string) => void;
  decreaseItemQuantity: (id: string) => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      totalCartItemsPrice: 0,
      addItem: (data: CartItem) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast.error("Item already in cart.");
        }

        data.cartItemQuantity = 1;

        set({
          items: [...get().items, data],
          totalCartItemsPrice: get().totalCartItemsPrice + Number(data.price),
        });

        toast.success(`${data.name} added to cart.`);
      },
      removeItem: (id: string) => {
        const currentItems = get().items;
        const removedItem = currentItems.find((item) => item.id === id);

        if (removedItem) {
          set({
            items: [...currentItems.filter((item) => item.id !== id)],
            totalCartItemsPrice:
              get().totalCartItemsPrice -
              Number(removedItem.price) * removedItem.cartItemQuantity,
          });
        }
      },

      increaseItemQuantity: (id: string) => {
        const currentItems = get().items;
        const item = currentItems.find((item) => item.id === id);

        if (item) {
          if (item.cartItemQuantity >= item.quantity) {
            return toast.error(
              "Item quantity cannot be more than available quantity."
            );
          }
          item.cartItemQuantity += 1;
          set({
            items: [...currentItems],
            totalCartItemsPrice: get().totalCartItemsPrice + Number(item.price),
          });
        }
      },

      decreaseItemQuantity: (id: string) => {
        const currentItems = get().items;
        const item = currentItems.find((item) => item.id === id);

        if (item) {
          if (item.cartItemQuantity > 1) {
            item.cartItemQuantity -= 1;
            set({
              items: [...currentItems],
              totalCartItemsPrice:
                get().totalCartItemsPrice - Number(item.price),
            });
          } else {
            set({
              items: [...currentItems.filter((item) => item.id !== id)],
              totalCartItemsPrice:
                get().totalCartItemsPrice - Number(item.price),
            });
          }
        }
      },

      removeAll: () => {
        set({ items: [], totalCartItemsPrice: 0 });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
