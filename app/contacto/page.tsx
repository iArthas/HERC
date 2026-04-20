import { Metadata } from 'next';
import { Navbar } from '@/app/components/Navbar';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Contacto - HERC | Ponte en Contacto',
  description: 'Contáctanos para solicitar información o un presupuesto de nuestros servicios',
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Contacto
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Estamos listos para ayudarte. Comunícate con nosotros y te responderemos a la brevedad.
            </p>
          </div>
        </section>

        <ContactSection />

        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Información de Contacto</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border border-blue-200 dark:border-slate-600">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-3">Ubicación</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Lima, Perú<br/>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Disponible en toda la región</span>
                </p>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border border-cyan-200 dark:border-slate-600">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold mb-3">Teléfono</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="tel:+51XXXXXXXXX" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">
                    +51 XXX XXX XXX
                  </a><br/>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Lun-Vie 8:00-18:00</span>
                </p>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border border-blue-200 dark:border-slate-600">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-bold mb-3">Email</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="mailto:info@herc.com" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">
                    info@herc.com
                  </a><br/>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Respuesta en 24h</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-4xl font-bold mb-6">Síguenos en Redes Sociales</h2>
            <p className="text-blue-100 mb-8">
              Mantente actualizado con nuestros últimos proyectos y novedades
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="inline-flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full transition">
                f
              </a>
              <a href="#" className="inline-flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full transition">
                📸
              </a>
              <a href="#" className="inline-flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full transition">
                🎥
              </a>
              <a href="#" className="inline-flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full transition">
                in
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
