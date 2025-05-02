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

// Manejo del formulario de contacto
const formulario = document.getElementById('formularioContacto');
const modal = document.getElementById('mensajeExito');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const datos = new FormData(formulario);

    fetch('enviar.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.text())
    .then(respuesta => {
        if (respuesta.trim() === "success") {
            modal.style.display = "flex";
            formulario.reset();
        } else {
            alert("Por favor utilicé el botón azul para enviarnos un correo.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error de red. Inténtalo más tarde.");
    });
});

// Función para cerrar el modal
function cerrarModal() {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic en el botón de correo
const btnCorreo = document.getElementById("btnCorreo");
btnCorreo.addEventListener("click", function (e) {
    e.preventDefault();           // Evita que el enlace se abra inmediatamente
    cerrarModal();                // Cierra el modal
    setTimeout(() => {
        window.location.href = btnCorreo.href; // Abre el cliente de correo
    }, 300); // Espera 300ms para que el cierre del modal se vea bien
});


