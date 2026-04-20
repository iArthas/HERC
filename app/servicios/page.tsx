import { Metadata } from 'next';
import { Navbar } from '@/app/components/Navbar';
import { Services } from '@/app/components/Services';
import { Footer } from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Servicios - HERC | Perforaciones de Pozos',
  description: 'Conoce nuestros servicios profesionales de perforación de pozos tubulares en Perú',
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Soluciones especializadas en perforación de pozos tubulares con tecnología de punta y profesionales altamente capacitados.
            </p>
          </div>
        </section>
        
        <Services />

        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Ventajas de Nuestros Servicios</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3">Rapidez</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Equipos modernos que garantizan trabajos eficientes en tiempo récord.
                </p>
              </div>
              
              <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-3">Confiabilidad</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Nuestros expertos garantizan la máxima calidad en cada proyecto.
                </p>
              </div>
              
              <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3">Seguridad</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Protocolos de seguridad certificados internacionalmente.
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
