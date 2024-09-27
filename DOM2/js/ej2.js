function AddLista(){
    var lista = document.createElement('li');
    var animal = document.createTextNode('canguro');
    lista.appendChild(animal);
    document.getElementById('listaelemen').appendChild(lista);
}

function insertLista(){
    let parent = document.getElementById('listaelemen');
    var lista = document.createElement('li');
    let texto = document.createTextNode('cocodrilo');
    lista.appendChild(texto);
    let primeraLista = parent.getElementsByTagName('li');
    parent.insertBefore(lista,primeraLista[0]);
}

function remplazarLista(){
    let parent = document.getElementById('listaelemen');
    let newLista = document.createElement('li');
    let texto = document.createTextNode('tiburón');
    newLista.appendChild(texto)
    let listaPrimerHijo = parent.getElementsByTagName('li')[1];

    if (listaPrimerHijo) {
        listaPrimerHijo.replaceWith(newLista);
    }
}

function borrarLista(){
    let parent = document.getElementById('listaelemen');
    let listaPrimerHijo = parent.getElementsByTagName('li')[0];

    if(listaPrimerHijo){
        parent.removeChild(listaPrimerHijo);
    }
}

function clonarLista(){
    let element = document.getElementById('listaelemen');
    let copia = element.cloneNode(true);

    clonado.appendChild(copia);
}