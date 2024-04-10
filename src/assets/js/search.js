import { END_POINTS } from "./server/end-points.js";
import { SourceTagRow } from "./server/dom-models/SourceTagRow.js";
import { V_SOURCE_TAG } from "./server/orm/models.js";

const $tagObtener = document.getElementById('tag-obtener');
const $tabBuscar = document.getElementById('tag-buscar');
const $buscar = document.getElementById('buscar');
const $resultados = document.getElementById('resultados');
const $tipoFuente = document.getElementById('tipo-fuente');
const $noResultados = document.getElementById('no-resultados');

$buscar.addEventListener('click', async () => {
    const { value: tipoFuente } = $tipoFuente;
    const data = {
        tagObtener: $tagObtener.value,
        tagBuscar: $tabBuscar.value,
        tipoFuente: tipoFuente !== 'todos' ? tipoFuente : null
    }

    const sources = await fetch(END_POINTS.SEARCH_SOURCE, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => response.json());
    $resultados.innerHTML = '';
    $noResultados.classList.add('hide');
    if (sources.length === 0) {
        $noResultados.classList.remove('hide');
        $noResultados.textContent = 'No se encontraron resultados';
        return;
    }
    const documentFragment = document.createDocumentFragment();
    for (const source of sources) {
        documentFragment.appendChild(new SourceTagRow(
            source[V_SOURCE_TAG.NAME],
            source[V_SOURCE_TAG.WEB_URL],
            source[V_SOURCE_TAG.IMAGE_PATH],
            source[V_SOURCE_TAG.TYPE_SOURCE],
            source[V_SOURCE_TAG.PUEDE_BUSCAR],
            source[V_SOURCE_TAG.PUEDE_OBTENER]
        ).getRow())
    }
    $resultados.appendChild(documentFragment);
    $resultados.scrollTo();
})