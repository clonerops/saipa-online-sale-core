import { create } from "zustand";

interface IComponentState {
  activeTab: number;
  actionActiveTab: (id: number) => void;

  activeFilter: number;
  actionActiveFilter: (id: number) => void;
}

export const useComponentStore = create<IComponentState>()((set) => ({
  activeTab: 0,
  actionActiveTab: (id) => set({ activeTab: id }),

  activeFilter: 0,
  actionActiveFilter: (id) => set({ activeFilter: id }),
}));
