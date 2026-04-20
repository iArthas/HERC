'use client';

import { Download, FileText, CheckCircle } from 'lucide-react';

const documents = [
  {
    id: 1,
    title: 'Permiso de Perforación - ANA',
    description: 'Autorización oficial de la Autoridad Nacional del Agua para realizar perforaciones de pozos tubulares en el Perú.',
    icon: CheckCircle,
    fileSize: '2.4 MB',
    downloadUrl: '#',
  },
  {
    id: 2,
    title: 'Certificado de Calidad',
    description: 'Certificación de cumplimiento de estándares internacionales en perforación y servicios especializados.',
    icon: FileText,
    fileSize: '1.8 MB',
    downloadUrl: '#',
  },
  {
    id: 3,
    title: 'Especificaciones Técnicas',
    description: 'Documentación detallada de equipos, procesos y metodologías de trabajo utilizados en nuestros proyectos.',
    icon: FileText,
    fileSize: '3.1 MB',
    downloadUrl: '#',
  },
];

export function DocumentsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Documentos y Permisos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Accede a nuestros documentos oficiales, certificaciones y permisos que garantizan la calidad y legalidad de nuestros servicios.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {documents.map((doc) => {
            const IconComponent = doc.icon;
            return (
              <div
                key={doc.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-cyan-400 group"
              >
                {/* Icon */}
                <div className="mb-4 inline-block p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  <IconComponent
                    size={28}
                    className="text-blue-600 dark:text-cyan-400"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {doc.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {doc.description}
                </p>

                {/* File Info */}
                <div className="flex justify-between items-center mb-4 pb-4 border-t border-gray-200 dark:border-slate-700">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {doc.fileSize}
                  </span>
                  <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
                    PDF
                  </span>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => {
                    // En producción, aquí iría la lógica de descarga real
                    alert(`Descargando: ${doc.title}`);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <Download size={18} className="group-hover/btn:animate-bounce" />
                  <span>Descargar PDF</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border-l-4 border-blue-600 dark:border-cyan-400">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle
                size={32}
                className="text-green-600 dark:text-green-400 mt-1"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Cumplimiento Normativo
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Todos nuestros permisos y certificaciones están actualizados y certificados por las autoridades competentes. Cumplimos con los más altos estándares de calidad, seguridad y responsabilidad ambiental en todas nuestras operaciones de perforación de pozos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
