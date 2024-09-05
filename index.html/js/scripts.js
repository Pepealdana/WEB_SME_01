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
