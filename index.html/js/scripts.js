document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.main-nav ul');
    const submenuItems = document.querySelectorAll('.submenu');

    // Toggle del menú hamburguesa
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('open'); // Cambia la apariencia del botón hamburguesa
    });

    // Cerrar el menú al hacer clic en cualquier lugar fuera del menú
    document.addEventListener('click', function (e) {
        if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    });

    // Asegurarse de que los submenús no queden abiertos al cerrar el menú principal en móviles
    submenuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation(); // Evitar que el evento burbujee hacia el menú principal
        });
    });
});
// sección información
document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider-item');
    const totalSlides = slides.length;
    
    function showSlide(index) {
        // Ajustamos el índice al rango adecuado
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
    
        // Ocultamos todos los slides
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
    
        // Mostramos solo el slide actual
        slides[currentSlide].style.display = 'flex';
    }
    
    // Agregamos los eventos de clic para las flechas
    document.querySelector('.slider-prev').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });
    
    document.querySelector('.slider-next').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });
    
    // Mostrar el primer slide al cargar la página
    showSlide(currentSlide);
});
