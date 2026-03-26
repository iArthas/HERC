import type { Metadata } from 'next';
import { ThemeProvider } from '@/app/context/ThemeContext';
import { ThemeToggle } from '@/app/components/ThemeToggle';
import './globals.css';

export const metadata: Metadata = {
  title: 'HERC - Perforaciones de Pozos Profesionales',
  description: 'Soluciones profesionales en perforación de pozos tubulares en Perú',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
