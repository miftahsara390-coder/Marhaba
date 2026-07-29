import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { storageAdapter } from "@/services/storage";
import { isTokenExpired } from "@/utils/jwt";

interface AuthState {
  user: any | null;
  token: string | null;
  isLoading: boolean;
  login: (token: string, user: any) => Promise<void>;
  logout: () => Promise<void>;
  checkTokenExpiration: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isLoading: true,

      login: async (token: string, user: any) => {
        set({ token, user, isLoading: false });
      },

      logout: async () => {
        set({ token: null, user: null });
      },

      checkTokenExpiration: () => {
        const { token } = get();
        if (token && isTokenExpired(token)) {
          console.log("JWT token has expired. Automatically logging out...");
          set({ token: null, user: null });
        }
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => storageAdapter),
      onRehydrateStorage: () => (state) => {
        if (state) {
          if (state.token && isTokenExpired(state.token)) {
            console.log(
              "Rehydrated JWT token is expired. Clearing auth state..."
            );
            useAuth.setState({ token: null, user: null, isLoading: false });
          } else {
            useAuth.setState({ isLoading: false });
          }
        }
      },
    }
  )
);