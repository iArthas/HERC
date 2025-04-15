// Modificación del archivo nosotros.js
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de scroll en secciones
    const sections = document.querySelectorAll('section');
    
    // Agregar clases para controlar las animaciones
    sections.forEach(section => {
        section.classList.add('section-hidden');
    });
    
    // Función para verificar visibilidad con throttling
    let ticking = false;
    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = (
                rect.top <= window.innerHeight * 0.8 && 
                rect.bottom >= 0
            );
            
            if (isVisible) {
                section.classList.remove('section-hidden');
                section.classList.add('section-visible');
            }
        });
        
        ticking = false;
    }
    
    // Verificar inicialmente sin esperar al scroll
    checkVisibility();
    
    // Event listener optimizado con requestAnimationFrame
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                checkVisibility();
            });
            ticking = true;
        }
    });
});