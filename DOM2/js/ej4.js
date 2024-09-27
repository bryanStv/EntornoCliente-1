function contar(tipo){
    let imagenes = document.getElementsByTagName('img');
    let enlaces = document.getElementsByTagName('a');
    let resultado = document.getElementById('resultado');
    let texto;
    if(tipo == 'img'){
        texto = document.createTextNode('Número de imagenes: '+imagenes.length());
        resultado.appendChild(texto);
    }else if(tipo == 'a'){
        texto = document.createTextNode('Número de enlaces: '+enlaces.length());
        resultado.appendChild(texto);
    }else{
        resultado.appendChild('Error');
    }
}

/*let elementos = document.getElementById('elementos');
let parrafo = document.createElement('p');
let texto = document.createTextNode(contar(tipo));
parrafo.append(texto);

elementos.appendChild(parrafo);*/