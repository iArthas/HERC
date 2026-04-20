'use client';

import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              HERC
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Soluciones profesionales en perforación de pozos tubulares con más de 10 años de experiencia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Servicios', 'Nosotros', 'Proyectos', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              {['Perforación', 'Bombas', 'Inspección', 'Mantenimiento'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <Phone size={20} />
                <a href="tel:+51123456789">+51 (1) 2345-6789</a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <Mail size={20} />
                <a href="mailto:info@herc.com">info@herc.com</a>
              </div>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>Lima, Perú</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">© 2024 HERC. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
                  title={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
