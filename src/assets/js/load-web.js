import { END_POINTS } from "./server/end-points.js";
import { TAG, TYPE_SOURCE } from "./server/orm/models.js";

const $tagObtener = document.getElementById('tag-obtener');
const $tagBuscar = document.getElementById('tag-buscar');
const $tipoFuente = document.getElementById('tipo-fuente');

window.addEventListener('load', async () => {
    const tags = await fetch(END_POINTS.GET_TAG, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
    const typeSources = await fetch(END_POINTS.GET_TYPE_SOURCE, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json());
    let optionObtener, optionBuscar;
    const optionsObtener = document.createDocumentFragment();
    const optionsBuscar = document.createDocumentFragment();
    // Insertar tags
    for (const tag of tags) {
        optionObtener = document.createElement('option'), optionBuscar = document.createElement('option');
        optionObtener.textContent = tag[TAG.TAG_NAME];
        optionObtener.value = tag[TAG.TAG_NAME];
        optionBuscar.textContent = tag[TAG.TAG_NAME];
        optionBuscar.value = tag[TAG.TAG_NAME];
        optionsObtener.appendChild(optionObtener);
        optionsBuscar.appendChild(optionBuscar);
    }
    $tagObtener.appendChild(optionsObtener);
    $tagBuscar.appendChild(optionsBuscar);

    // Insertar tipos de fuente
    let optionsTypeSource = document.createDocumentFragment();
    let optionTypeSource;
    for (const typeSource of typeSources) {
        optionTypeSource = document.createElement('option');
        optionTypeSource.textContent = typeSource[TYPE_SOURCE.TYPE_SOURCE];
        optionTypeSource.value = typeSource[TYPE_SOURCE.TYPE_SOURCE];
        optionsTypeSource.appendChild(optionTypeSource);
    }
    $tipoFuente.appendChild(optionsTypeSource);
})