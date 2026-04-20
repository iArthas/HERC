'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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

  // Manejar cierre con tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage]);

  const closeModal = () => setSelectedImage(null);
  const goToPrevious = () => {
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage);
    if (currentIndex > 0) {
      setSelectedImage(galleryImages[currentIndex - 1].id);
    }
  };
  const goToNext = () => {
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage);
    if (currentIndex < galleryImages.length - 1) {
      setSelectedImage(galleryImages[currentIndex + 1].id);
    }
  };

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
        <div 
          className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              onClick={closeModal}
              className="absolute -top-14 right-0 text-white hover:bg-white/20 p-2 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
              title="Cerrar (ESC)"
            >
              <X size={32} strokeWidth={3} />
            </button>

            {/* Imagen Principal */}
            <div className="relative">
              <img
                src={galleryImages.find((img) => img.id === selectedImage)?.url}
                alt={galleryImages.find((img) => img.id === selectedImage)?.title}
                className="w-full rounded-2xl shadow-2xl"
              />
              
              {/* Info de Navegación */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white text-sm font-medium">
                  {galleryImages.findIndex((img) => img.id === selectedImage) + 1} / {galleryImages.length}
                </span>
                <span className="text-white text-sm">
                  {galleryImages.find((img) => img.id === selectedImage)?.title}
                </span>
              </div>
            </div>

            {/* Botones de Navegación */}
            <button
              onClick={goToPrevious}
              disabled={galleryImages[0].id === selectedImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 disabled:opacity-30 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
              title="Imagen anterior"
            >
              <ChevronLeft size={28} strokeWidth={3} />
            </button>

            <button
              onClick={goToNext}
              disabled={galleryImages[galleryImages.length - 1].id === selectedImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 disabled:opacity-30 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
              title="Siguiente imagen"
            >
              <ChevronRight size={28} strokeWidth={3} />
            </button>

            {/* Hint de ESC */}
            <div className="text-center text-white/60 text-sm mt-4">
              Presiona <kbd className="bg-white/10 px-2 py-1 rounded text-xs font-mono">ESC</kbd> para cerrar
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
