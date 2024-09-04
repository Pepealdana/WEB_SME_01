// scripts.js

// Ejecutar el código después de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias al botón de menú hamburguesa y al menú de navegación principal
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    // Añadir un listener para alternar la visibilidad del menú al hacer clic en el botón de menú
    menuToggle.addEventListener("click", function() {
        menuToggle.classList.toggle("active");
        mainNav.classList.toggle("active");
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function(event) {
        // Verificar si el clic ocurrió fuera del botón de menú y del menú de navegación
        if (!menuToggle.contains(event.target) && !mainNav.contains(event.target)) {
            menuToggle.classList.remove("active");
            mainNav.classList.remove("active");
        }
    });
});
