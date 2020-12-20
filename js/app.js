import * as UI from './interfaz.js';
import API from './api.js';

console.log(UI);

UI.formularioBuscar.addEventListener('submit', buscarCancion);


function buscarCancion(e) {
    e.preventDefault();

    //? Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    //? validamos
    if (artista === '' || cancion === '') {
        //! Mostrar error
        UI.divMensajes.textContent = 'Error, todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);
    }

    //? Consultamos la api

    const busqueda = new API(artista, cancion);
    busqueda.consultarApi();
    console.log(busqueda);
}