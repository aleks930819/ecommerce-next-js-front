import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

interface useCheckoutMenuStore {
  isOpen: boolean;
  openCheckoutMenu: () => void;
  closeCheckoutMenu: () => void;
}

const useCheckoutMenu = create<useCheckoutMenuStore>((set, get) => ({
  isOpen: false,
  openCheckoutMenu: () => set({ isOpen: true }),
  closeCheckoutMenu: () => set({ isOpen: false }),
}));

export default useCheckoutMenu;
