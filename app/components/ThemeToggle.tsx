'use client';

import { useTheme } from '@/app/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-6 right-6 z-50
        w-14 h-14 rounded-full
        flex items-center justify-center
        transition-all duration-300 ease-out
        backdrop-blur-md
        border border-opacity-30
        hover:scale-110 active:scale-95
        shadow-lg hover:shadow-glow
        group
        ${
          theme === 'light'
            ? 'bg-white/80 border-white/30 text-gray-800 hover:bg-white'
            : 'bg-slate-900/80 border-slate-700/50 text-yellow-400 hover:bg-slate-800'
        }
      `}
      title={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        {theme === 'light' ? (
          <Moon
            size={24}
            className="absolute inset-0 group-hover:animate-pulse transition-all duration-300"
          />
        ) : (
          <Sun
            size={24}
            className="absolute inset-0 group-hover:animate-pulse transition-all duration-300"
          />
        )}
      </div>

      {/* Efecto de partículas alrededor */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
    </button>
  );
}
