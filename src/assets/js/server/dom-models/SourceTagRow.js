export class SourceTagRow {
    constructor(name, webUrl, imagePath, typeSource, puedeBuscar, puedeObtener) {
        this.row = document.createElement('a');
        const image = document.createElement('img');
        const resultadoDetallesContenedor = document.createElement('div');
        const nameH3 = document.createElement('h2');
        const typeSourceP = document.createElement('p');
        /* const puedeBuscarP = document.createElement('p');
        const puedeObtenerP = document.createElement('p'); */

        this.row.classList.add('resultado');
        this.row.href = webUrl;
        image.src = imagePath;
        image.alt = 'Imagen de la fuente';
        resultadoDetallesContenedor.classList.add('resultado__detalles');
        nameH3.textContent = name;
        typeSourceP.textContent = `Tipo de fuente: ${typeSource}`;
        /* puedeBuscarP.textContent = `Puede buscar: ${puedeBuscar}`;
        puedeObtenerP.textContent = `Puede obtener: ${puedeObtener}`; */

        this.row.appendChild(image);
        resultadoDetallesContenedor.appendChild(nameH3);
        resultadoDetallesContenedor.appendChild(typeSourceP);
        /* resultadoDetallesContenedor.appendChild(puedeBuscarP);
        resultadoDetallesContenedor.appendChild(puedeObtenerP); */
        this.row.appendChild(resultadoDetallesContenedor);
    }

    getRow() {
        return this.row;
    }
}