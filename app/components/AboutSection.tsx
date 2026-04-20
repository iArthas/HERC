'use client';

import { Check } from 'lucide-react';

export function AboutSection() {
  const values = [
    { title: 'Excelencia', description: 'Máxima calidad en cada proyecto' },
    { title: 'Innovación', description: 'Tecnología de última generación' },
    { title: 'Confiabilidad', description: 'Soluciones duraderas y efectivas' },
    { title: 'Responsabilidad', description: 'Compromiso con el ambiente' },
  ];

  return (
    <section id="nosotros" className="py-20 px-4 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Sobre HERC</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Más de una década de experiencia en soluciones de perforación
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl transform -rotate-3 opacity-10" />
            <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-1">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop"
                alt="HERC Team"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Expertos en Perforación
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                HERC es una empresa líder en soluciones de perforación de pozos tubulares, con un equipo de profesionales altamente capacitados y certificados.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {['Certificados', 'Profesionales', 'Experiencia', 'Innovación'].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600"
                >
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="font-semibold text-gray-900 dark:text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="card-base card-hover bg-white dark:bg-slate-700/50 p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white font-bold">✓</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
