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
    let Newparrafo = document.createElement('p');
    let texto = document.createTextNode('Párrafo reemplazado');
    parrafo.appendChild(texto)
    let parrafoPrimerHijo = parent.getElementsByTagName('p')[0];
    parrafoPrimerHijo.replace(Newparrafo,parrafoPrimerHijo);
}