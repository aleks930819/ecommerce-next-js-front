import { create } from "zustand";

interface CategoryState {
  category: string;
  setCategory: (category: string) => void;
}

const useCategory = create<CategoryState>((set) => ({
  category: "",
  setCategory: (category) => set({ category }),
}));

export default useCategory;
