function contar(tipo){
    let imagenes = document.getElementsByTagName('img');
    let enlaces = document.getElementsByTagName('a');
    if(tipo == 'img'){
        return 'Número de imagenes: '+imagenes.length();
    }else if(tipo == 'a'){
        return 'Número de enlaces: '+enlaces.length();
    }else{
        return "Error";
    }
}

let elementos = document.getElementById('elementos');
let parrafo = document.createElement('p');
let texto = document.createTextNode(contar(tipo));
parrafo.append(texto);

elementos.appendChild(parrafo);