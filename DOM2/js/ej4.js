function contar(tipo){

    let imagenes = document.getElementsByTagName('img');
    let enlaces = document.getElementsByTagName('a');
    let resultado = document.getElementById('resultado');
    let texto;

    if(tipo == 'img'){
        texto = document.createTextNode('Número de imagenes: '+imagenes.length);
        resultado.appendChild(texto);
        resultado.appendChild(document.createElement('br'));
    }else if(tipo == 'a'){
        texto = document.createTextNode('Número de enlaces: '+enlaces.length);
        resultado.appendChild(texto);
        resultado.appendChild(document.createElement('br'));
    }else{
        resultado.appendChild('Error');
        resultado.appendChild(document.createElement('br'));
    }
}