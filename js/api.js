import * as UI from './interfaz.js';


class API {

    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarApi() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.lyrics) {
                    const { lyrics } = data;
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = ` ${this.cancion} de ${this.artista}`;
                } else {
                    UI.divMensajes.textContent = 'La cancion no existe, prueba otra busqueda';
                    UI.divMensajes.classList.add('error');
                }

            });
    }
}

export default API;