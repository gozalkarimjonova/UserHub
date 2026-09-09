import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const applyTheme = (theme) => {
  const isDark = theme === 'dark';
  document.documentElement.classList.toggle('dark', isDark);
  document.body.style.backgroundColor = isDark ? '#0c0618' : '#f5f3ff';
  document.body.style.colorScheme = isDark ? 'dark' : 'light';
};

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'dark',

      toggleTheme: () =>
        set((state) => {
          const nextTheme = state.theme === 'light' ? 'dark' : 'light';
          applyTheme(nextTheme);
          return { theme: nextTheme };
        }),

      setTheme: (newTheme) => {
        applyTheme(newTheme);
        set({ theme: newTheme });
      },
    }),
    {
      name: 'user-theme-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state?.theme) {
          applyTheme(state.theme);
        }
      },
    }
  )
);
