import { defineStore } from "pinia";
import type { User, SearchForm } from "~/types";

interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
  searchPreferences: SearchForm | null;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    currentUser: null,
    isAuthenticated: false,
    searchPreferences: null,
  }),

  getters: {
    isParent: (state) => state.currentUser?.role === "parent",
    isNanny: (state) => state.currentUser?.role === "nanny",
    userProfile: (state) => state.currentUser?.profile,
  },

  actions: {
    async login(email: string, password: string) {
      try {
        // TODO: Implement actual login logic
        console.log("Login attempt:", email);

        // Mock user for development
        this.currentUser = {
          id: "1",
          email,
          role: "parent",
          profile: {
            firstName: "Marie",
            lastName: "Dupont",
            city: "Paris",
            postalCode: "75001",
          },
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        this.isAuthenticated = true;
        return { success: true };
      } catch (error) {
        console.error("Login error:", error);
        return { success: false, error: "Erreur de connexion" };
      }
    },

    async register(userData: any) {
      try {
        // TODO: Implement actual registration logic
        console.log("Registration attempt:", userData);
        return { success: true };
      } catch (error) {
        console.error("Registration error:", error);
        return { success: false, error: "Erreur d'inscription" };
      }
    },

    logout() {
      this.currentUser = null;
      this.isAuthenticated = false;
      this.searchPreferences = null;
    },

    updateSearchPreferences(preferences: SearchForm) {
      this.searchPreferences = preferences;
    },
  },
});
