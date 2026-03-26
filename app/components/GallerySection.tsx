'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    title: 'Perforación Profesional',
    url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Equipos Especializados',
    url: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Control de Calidad',
    url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Instalación de Bombas',
    url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Inspección Técnica',
    url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Mantenimiento',
    url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Galería de Proyectos</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Explora nuestros trabajos realizados y proyectos exitosos
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="card-base card-hover cursor-pointer overflow-hidden group bg-gray-100 dark:bg-slate-800"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:scale-110 transition-transform"
            >
              <X size={32} />
            </button>
            <img
              src={galleryImages.find((img) => img.id === selectedImage)?.url}
              alt="Fullscreen"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
