import type { Metadata } from 'next';
import { ThemeProvider } from '@/app/context/ThemeContext';
import { FloatingButtons } from '@/app/components/FloatingButtons';
import './globals.css';

export const metadata: Metadata = {
  title: 'HERC - Perforaciones de Pozos Profesionales',
  description: 'Soluciones profesionales en perforación de pozos tubulares en Perú',
  viewport: 'width=device-width, initial-scale=1',
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <FloatingButtons />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
