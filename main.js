function abrir_cerrar_menu() {
    const menu = document.getElementById('menu');
    const boton = document.getElementById('x');

    menu.classList.toggle('abrir_menu');
    boton.classList.toggle('colocar_x');
}