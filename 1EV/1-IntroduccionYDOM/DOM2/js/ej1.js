function AddParrafo(){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode('Párrafo añadido.');
    parrafo.appendChild(texto);
    document.getElementById('ej-aCh').appendChild(parrafo);
}

function insertParrafo(){
    let parent = document.getElementById('ej-aCh');
    let texto = document.createTextNode('Párrafo insertado');
    let primerParrafo = parent.getElementsByTagName('p');
    parent.insertBefore(texto,primerParrafo[0]);
}

function remplazarParrafo(){
    let parent = document.getElementById('ej-aCh');
    let newParrafo = document.createElement('p');
    let texto = document.createTextNode('Párrafo reemplazado');
    newParrafo.appendChild(texto)
    let parrafoPrimerHijo = parent.getElementsByTagName('p')[1];

    if (parrafoPrimerHijo) {
        parrafoPrimerHijo.replaceWith(newParrafo);
    }
}

function borrarParrafo(){
    let parent = document.getElementById('ej-aCh');
    let parrafoPrimerHijo = parent.getElementsByTagName('p')[1];

    if(parrafoPrimerHijo){
        parent.removeChild(parrafoPrimerHijo);
    }
}

function clonarDiv(){
    let element = document.getElementById('ej-aCh');
    let copia = element.cloneNode(true);

    element.appendChild(copia);
}