// Script para reemplazar imágenes con imágenes aleatorias profesionales
// Usando Unsplash API (requiere conexión a internet)

const imageCategories = {
    drilling: ['industrial drilling', 'water well drilling', 'construction drilling', 'mining equipment'],
    water: ['water pipe', 'water infrastructure', 'water system', 'water engineering'],
    construction: ['construction site', 'infrastructure', 'engineering', 'industrial construction'],
    team: ['professional team', 'engineers working', 'team collaboration', 'professional meeting'],
    service: ['industrial service', 'technical support', 'maintenance', 'installation service']
};

// Función para obtener URL de imagen aleatoria de Unsplash
function getUnsplashImage(category, width = 800, height = 600) {
    const categories = imageCategories[category] || imageCategories.construction;
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const timestamp = Date.now();
    return `https://source.unsplash.com/${width}x${height}/?${randomCategory}&sig=${timestamp}`;
}

// Función alternativa usando placeholder profesional
function getPlaceholderImage(category, width = 800, height = 600) {
    const colors = ['667eea', '764ba2', '00b4ff', '00d4ff', '1a1a23'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return `https://via.placeholder.com/${width}x${height}/${randomColor}/ffffff?text=${category.toUpperCase()}`;
}

// Reemplazar imágenes al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Reemplazar imágenes de secciones principales
    const sectionImages = document.querySelectorAll('.image-content img');
    sectionImages.forEach((img, index) => {
        const category = index % 2 === 0 ? 'drilling' : 'water';
        // Intentar con Unsplash, fallback a placeholder
        img.src = getUnsplashImage(category, 800, 600);
        img.onerror = function() {
            this.src = getPlaceholderImage(category, 800, 600);
        };
        img.style.opacity = '0';
        img.onload = function() {
            this.style.transition = 'opacity 0.5s ease';
            this.style.opacity = '1';
        };
    });

    // Reemplazar imágenes de carrusel de aliados
    const carouselImages = document.querySelectorAll('.swiper-slide img');
    carouselImages.forEach((img, index) => {
        const categories = ['team', 'construction', 'service', 'water', 'industrial'];
        const category = categories[index % categories.length];
        img.src = getUnsplashImage(category, 400, 250);
        img.onerror = function() {
            this.src = getPlaceholderImage(category, 400, 250);
        };
    });

    // Reemplazar banner de certificación
    const certBanner = document.querySelector('.hero-banner');
    if (certBanner) {
        certBanner.style.backgroundImage = `url('${getUnsplashImage('construction', 1600, 900)}')`;
        // Fallback si hay error
        setTimeout(() => {
            if (!certBanner.style.backgroundImage || certBanner.style.backgroundImage === 'none') {
                certBanner.style.backgroundImage = `url('${getPlaceholderImage('construction', 1600, 900)}')`;
            }
        }, 3000);
    }
});

// Función para actualizar imágenes manualmente
function refreshImages() {
    const allImages = document.querySelectorAll('img[src*="image/"], [style*="background-image"]');
    allImages.forEach((img, index) => {
        const categories = ['drilling', 'water', 'construction', 'team', 'service'];
        const category = categories[index % categories.length];
        
        if (img.tagName === 'IMG') {
            img.src = getUnsplashImage(category, 800, 600);
        }
    });
}

// Exportar funciones para uso global
window.randomImages = {
    refresh: refreshImages,
    getUnsplash: getUnsplashImage,
    getPlaceholder: getPlaceholderImage
};
