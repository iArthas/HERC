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


