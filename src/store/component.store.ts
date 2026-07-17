import { create } from "zustand";

interface IComponentState {
  activeTab: number;
  actionActiveTab: (id: number) => void;
}

export const useComponentStore = create<IComponentState>()((set) => ({
  activeTab: 0,
  actionActiveTab: (id) => set({ activeTab: id  }),
}));
