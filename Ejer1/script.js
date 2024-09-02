document.addEventListener('DOMContentLoaded', () => {
    const imagen = document.getElementById('mi-imagen');

    imagen.addEventListener('click', () => {
        imagen.classList.toggle('borde-rojo');
    });
});