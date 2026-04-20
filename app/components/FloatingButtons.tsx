'use client';

import { useState, useEffect } from 'react';
import { Phone, ArrowUp, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300;
      setShowScrollTop(isScrolled);
      setShowWhatsapp(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/51XXXXXXXXX?text=Hola%20HERC"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          fixed right-6 z-40
          w-14 h-14 rounded-full
          flex items-center justify-center
          transition-all duration-300 ease-out
          bg-gradient-to-br from-green-400 to-green-600
          hover:scale-110 active:scale-95
          shadow-lg hover:shadow-2xl
          group
          ${showWhatsapp ? 'bottom-56 opacity-100 visible' : 'bottom-6 opacity-0 invisible'}
        `}
        title="Contactar por WhatsApp"
        aria-label="WhatsApp"
      >
        <Phone size={24} className="text-white" />
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
          1
        </div>
      </a>

      {/* Botón Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`
          fixed right-6 z-40
          w-14 h-14 rounded-full
          flex items-center justify-center
          transition-all duration-300 ease-out
          bg-gradient-to-br from-blue-400 to-blue-600
          dark:from-cyan-400 dark:to-blue-600
          hover:scale-110 active:scale-95
          shadow-lg hover:shadow-2xl
          group
          ${showScrollTop ? 'bottom-32 opacity-100 visible' : '-bottom-32 opacity-0 invisible pointer-events-none'}
        `}
        title="Volver al inicio"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="text-white" />
      </button>

      {/* Botón Toggle Tema */}
      {mounted && (
        <button
          onClick={toggleTheme}
          className={`
            fixed right-6 bottom-6 z-40
            w-14 h-14 rounded-full
            flex items-center justify-center
            transition-all duration-300 ease-out
            backdrop-blur-md
            border border-opacity-30
            hover:scale-110 active:scale-95
            shadow-lg hover:shadow-xl
            group
            ${
              theme === 'light'
                ? 'bg-white/80 border-white/30 text-gray-800 hover:bg-white'
                : 'bg-slate-800/80 border-slate-700/50 text-yellow-400 hover:bg-slate-700'
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
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
        </button>
      )}
    </>
  );
}
