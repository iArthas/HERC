import { Metadata } from 'next';
import { Navbar } from '@/app/components/Navbar';
import { AboutSection } from '@/app/components/AboutSection';
import { Footer } from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Nosotros - HERC | Quiénes Somos',
  description: 'Conoce la historia, misión y valores de HERC - Especialistas en perforación de pozos',
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Sobre HERC
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Más de 15 años brindando soluciones confiables en perforación de pozos tubulares.
            </p>
          </div>
        </section>

        <AboutSection />

        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Nuestros Valores</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-blue-200 dark:border-slate-600">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-cyan-400">Integridad</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Operamos con transparencia y honestidad en cada proyecto, priorizando la confianza de nuestros clientes.
                </p>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-cyan-200 dark:border-slate-600">
                <h3 className="text-2xl font-bold mb-4 text-cyan-600 dark:text-blue-400">Excelencia</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Nos comprometemos con los más altos estándares de calidad en todos nuestros servicios.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-blue-200 dark:border-slate-600">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-cyan-400">Innovación</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Utilizamos tecnología de vanguardia para optimizar nuestros procesos y resultados.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-cyan-200 dark:border-slate-600">
                <h3 className="text-2xl font-bold mb-4 text-cyan-600 dark:text-blue-400">Sostenibilidad</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Nos preocupamos por el impacto ambiental y operamos de manera responsable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Estadísticas de HERC</h2>
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              <div>
                <div className="text-5xl font-bold mb-2">15+</div>
                <p className="text-blue-100">Años de experiencia</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <p className="text-blue-100">Proyectos completados</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <p className="text-blue-100">Satisfacción de clientes</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <p className="text-blue-100">Profesionales capacitados</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
