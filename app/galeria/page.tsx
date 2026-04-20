import { Metadata } from 'next';
import { Navbar } from '@/app/components/Navbar';
import { GallerySection } from '@/app/components/GallerySection';
import { Footer } from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Galería - HERC | Proyectos y Trabajos',
  description: 'Visualiza nuestros proyectos de perforación y los trabajos realizados por HERC',
};

export default function GaleriaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Galería de Proyectos
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explora nuestro portafolio de trabajos realizados con excelencia y profesionalismo.
            </p>
          </div>
        </section>

        <GallerySection />

        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Tipos de Proyectos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="text-5xl mb-4">💧</div>
                <h3 className="text-xl font-bold mb-3">Pozos de Agua</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Perforación especializada para extracción de agua potable y riego agrícola.
                </p>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="text-5xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold mb-3">Perforación Geotécnica</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Estudios de suelo para proyectos de construcción e infraestructura.
                </p>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="text-5xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold mb-3">Perforación Industrial</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Soluciones especializadas para proyectos industriales complejos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
