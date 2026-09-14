'use client';

import React, { useEffect, useState } from 'react';
import { useThemeStore } from '@/lib/store/themeStore';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme, setTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('aegis_theme') as 'dark' | 'light' | null;
    if (saved) {
      setTheme(saved);
    }
  }, [setTheme]);

  if (!mounted) {
    return (
      <div className={`w-14 h-7 rounded-full bg-white/10 animate-pulse ${className}`} />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative flex items-center justify-between w-16 h-8 px-1.5 rounded-full border transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-md ${
        isDark
          ? 'bg-black/70 border-white/20 text-white hover:border-white/40'
          : 'bg-white/90 border-neutral-300 text-neutral-900 hover:border-neutral-400'
      } ${className}`}
      title={isDark ? 'Aydınlık Mod (Galeri) Aç' : 'Karanlık Mod (Sinematik) Aç'}
      aria-label="Tema Değiştir"
    >
      {/* Sun Icon */}
      <span className="text-[11px] leading-none select-none transition-opacity duration-200">
        ☀️
      </span>

      {/* Moon Icon */}
      <span className="text-[11px] leading-none select-none transition-opacity duration-200">
        🌙
      </span>

      {/* Floating Toggle Knob */}
      <div
        className={`absolute top-1 w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center shadow-md ${
          isDark
            ? 'left-1 translate-x-8 bg-neutral-900 border border-white/30 text-white'
            : 'left-1 translate-x-0 bg-white border border-neutral-200 text-neutral-900'
        }`}
      >
        <span className="text-[10px]">
          {isDark ? '🌙' : '☀️'}
        </span>
      </div>
    </button>
  );
}
