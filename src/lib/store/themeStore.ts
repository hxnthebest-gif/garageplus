'use client';

import { create } from 'zustand';

export type AppTheme = 'dark' | 'light';

interface ThemeState {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'dark', // Luxury Dark by default
  setTheme: (theme: AppTheme) => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      const body = document.body;
      if (theme === 'light') {
        root.classList.remove('dark');
        root.classList.add('light');
        root.setAttribute('data-theme', 'light');
        if (body) {
          body.classList.remove('dark');
          body.classList.add('light');
        }
      } else {
        root.classList.remove('light');
        root.classList.add('dark');
        root.setAttribute('data-theme', 'dark');
        if (body) {
          body.classList.remove('light');
          body.classList.add('dark');
        }
      }
      localStorage.setItem('aegis_theme', theme);
    }
    set({ theme });
  },
  toggleTheme: () => {
    const current = get().theme;
    const next = current === 'dark' ? 'light' : 'dark';
    get().setTheme(next);
  }
}));
