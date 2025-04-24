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

function mostrarVideo(element) {
    const modal = document.getElementById('modal-video');
    const video = document.getElementById('video-modal');
    const videoSource = element.querySelector('video source').src;
    const closeButton = document.getElementById('close-video');

    video.querySelector('source').src = videoSource; // Se asigna la fuente del video
    video.muted = true; // Asegura que el video esté en silencio
    video.load(); // Se recarga el video para aplicar la nueva fuente
    modal.style.display = 'flex';
    closeButton.style.display = 'block'; // Muestra la X cuando se abre el modal
}


function exitModal() {
    const modal = document.getElementById('modal-video');
    const video = document.getElementById('video-modal');
    modal.style.display = 'none';
    video.pause(); // Detiene el video cuando se cierra
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        exitModal();       // Cierra el modal de video
        cerrarModal();     // Cierra el modal de imagen
    }
});
