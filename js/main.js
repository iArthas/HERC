// Inicializar modo oscuro
function initDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedMode = localStorage.getItem('darkMode');
    
    if (savedMode !== null) {
        if (savedMode === 'true') {
            document.body.classList.add('dark-mode');
        }
    } else if (prefersDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    }
}

// Función para cambiar modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Inicializar al cargar
initDarkMode();

// Escuchar cambios en preferencias del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('darkMode')) {
        if (e.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
});

// Botón para cambiar modo oscuro
const darkModeBtn = document.getElementById('dark-mode-toggle');
if (darkModeBtn) {
    darkModeBtn.addEventListener('click', function() {
        toggleDarkMode();
        updateDarkModeIcon();
    });
}

// Actualizar icono del botón de modo oscuro
function updateDarkModeIcon() {
    const darkModeBtn = document.getElementById('dark-mode-toggle');
    const icon = darkModeBtn?.querySelector('i');
    if (icon) {
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}

// Actualizar icono al cargar
updateDarkModeIcon();

// Efecto de scroll en navbar
window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("nav-scrolled");
        nav.classList.remove("nav-transparent");
    } else {
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-scrolled");
    }
});

// Menú hamburguesa
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const barIcon = menuToggle.querySelector(".fa-bars");
const timesIcon = menuToggle.querySelector(".fa-times");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    
    if (menu.classList.contains("active")) {
        barIcon.style.display = "none";
        timesIcon.style.display = "inline";
    } else {
        barIcon.style.display = "inline";
        timesIcon.style.display = "none";
    }
});

// Función específica para la galería
if (window.location.pathname.includes('galeria.html')) {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        
        if (scroll >= 50) {
            $('nav').addClass('galeria-nav');
        } else {
            $('nav').removeClass('galeria-nav');
        }
    });
}

// Mostrar u ocultar el botón "Volver Arriba"
window.addEventListener('scroll', function() {
    let btnTop = document.getElementById("btn-top");
    if (window.scrollY > 300) {
        btnTop.classList.add("show");
    } else {
        btnTop.classList.remove("show");
    }
});

// Función para volver al inicio de la página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Mostrar botón de WhatsApp al hacer scroll
function updateWhatsAppButton() {
    let btnWhatsapp = document.getElementById("btn-whatsapp");
    if (btnWhatsapp) {
        if (window.scrollY > 300) {
            btnWhatsapp.style.opacity = "1";
            btnWhatsapp.style.visibility = "visible";
            btnWhatsapp.style.pointerEvents = "auto";
        } else {
            btnWhatsapp.style.opacity = "0";
            btnWhatsapp.style.visibility = "hidden";
            btnWhatsapp.style.pointerEvents = "none";
        }
    }
}

// Inicializar al cargar
updateWhatsAppButton();

// Actualizar al hacer scroll
window.addEventListener('scroll', updateWhatsAppButton);

// Agregar animaciones al scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'slideInUp 0.8s ease-out forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.section, .servicio, .carousel-container').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});


