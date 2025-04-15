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

function mostrarCertificado(element) {
    const modal = document.getElementById('modal-certificado');
    const img = document.getElementById('certificado-modal');
    const closeButton = document.getElementById('close-button');

    img.src = element.querySelector('img').src;
    modal.style.display = 'flex';
    closeButton.style.display = 'block'; // Muestra la X cuando se abre el modal
}

function cerrarModal() {
    document.getElementById('modal-certificado').style.display = 'none';
    document.getElementById('close-button').style.display = 'none'; // Oculta la X cuando se cierra
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-certificado');
    if (event.target === modal) {
        cerrarModal();
    }
}