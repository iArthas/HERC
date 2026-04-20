'use client';

import { Droplets, Zap, Shield, Wrench, Settings, Cog } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Perforación de Pozos',
    description: 'Servicios especializados en perforación de pozos tubulares con tecnología de última generación',
    icon: Droplets,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Instalación de Bombas',
    description: 'Instalación y configuración de sistemas de bombeo avanzados para máxima eficiencia',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 3,
    title: 'Inspección y Diagnostico',
    description: 'Evaluación técnica completa de sistemas con equipos de última tecnología',
    icon: Shield,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'Mantenimiento Preventivo',
    description: 'Programas de mantenimiento diseñados para maximizar la vida útil de equipos',
    icon: Wrench,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    title: 'Rehabilitación de Pozos',
    description: 'Recuperación y revitalización de pozos existentes con técnicas innovadoras',
    icon: Settings,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 6,
    title: 'Asesoría Técnica',
    description: 'Consultoría profesional para optimizar su infraestructura de perforación',
    icon: Cog,
    color: 'from-indigo-500 to-purple-500',
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 px-4 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="section-title mb-4">Nuestros Servicios</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Soluciones integrales adaptadas a tus necesidades específicas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="card-base card-hover bg-gray-50 dark:bg-slate-800/50 backdrop-blur-sm p-8 group"
              >
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Line */}
                <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
