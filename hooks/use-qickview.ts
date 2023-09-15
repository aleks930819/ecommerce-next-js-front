import { create } from "zustand";

import { Product } from "@/types";

interface QuickViewState {
  isOpen: boolean;
  openQuickView: () => void;
  closeQuickView: () => void;
  setProduct: (product: Product) => void;
  product?: Product;
}

export const useQuickViewStore = create<QuickViewState>((set) => ({
  isOpen: false,
  openQuickView: () => set({ isOpen: true }),
  closeQuickView: () => set({ isOpen: false }),
  setProduct: (product: Product) => set({ product }),
  product: undefined,
}));
