import { create } from "zustand";

interface AuthState {
  showPassword: boolean;
  repeatPassword: boolean;

  actionShowPasswordState: () => void;
  actionRepeatShowPasswordState: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  showPassword: false,
  actionShowPasswordState: () =>
    set((state) => ({ showPassword: !state.showPassword })),

  repeatPassword: false,
  actionRepeatShowPasswordState: () =>
    set((state) => ({ repeatPassword: !state.repeatPassword })),
}));
