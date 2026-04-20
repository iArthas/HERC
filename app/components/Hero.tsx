'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden pt-20">
      {/* Fondo animado */}
      <div className="absolute inset-0">
        {/* Grid animado */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,180,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,255,0.1)_1px,transparent_1px)] bg-[50px_50px] animate-float opacity-20" />

        {/* Partículas flotantes */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `particle-float ${3 + particle.id % 3}s ease-in infinite`,
              animationDelay: `${particle.id * 0.1}s`,
            }}
          />
        ))}

        {/* Gradientes radiales */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-6 animate-slide-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Perforaciones
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Profesionales
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Soluciones integrales en perforación de pozos tubulares con tecnología de punta
          </p>

          <div className="flex gap-4 justify-center pt-6">
            <button className="btn-primary">Conocer Servicios</button>
            <button className="btn-secondary">Contactenos</button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </div>
    </section>
  );
}
