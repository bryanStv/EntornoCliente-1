var resultado = document.getElementById('resultado');

//EJERCICIO 3
function numeroEnlaces(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
    let enlaces = document.getElementsByTagName('a');
    let numEnlaces = document.createTextNode('Número de enlaces: '+enlaces.length);
    resultado.appendChild(numEnlaces);
}

function referenciaEnlaces(){
    let totalReferencias = 0;
    let referencias = document.getElementsByTagName('a');
    let textoReferencias = '';

    for(let i = 0; i < referencias.length; i++){
        if(referencias[i].hasAttribute('href')){
            totalReferencias++;
            textoReferencias += 'nº'+totalReferencias+': '+referencias[i]+'\n';

            resultado.innerText = textoReferencias;
        }
    }
}

function numEnlacesParrafo(){
    let contenedor = document.getElementById('contenedor');
    let result = '';

    if(contenedor.hasChildNodes()){
        let parrafos = contenedor.getElementsByTagName('p');
        let contador = 0;

        while(contador < parrafos.length){
            result += 'Parrafo nº'+(contador+1)+': '+referenciasEnlacesEnParrafo(parrafos[contador])+'\n';
            contador++;
        }
    }

    resultado.innerText = result;
}

function referenciasEnlacesEnParrafo(parrafo){
    let textoFinal = '';
    if(parrafo.hasChildNodes){
        let totalReferencias = 0;
        let referencias = parrafo.getElementsByTagName('a');
    
        for(let i = 0; i < referencias.length; i++){
            if(referencias[i].hasAttribute('href')){
                totalReferencias++;
                textoFinal += 'nº'+ totalReferencias+': '+referencias[i]+'\n';
            }
        }

        return textoFinal;
    }else{
        return 0;
    }
}

//EJERCICIO 4

function parrafosColor(color){
    let parrafos = document.getElementById('contenedor').getElementsByTagName('p');
    for (let parrafo of parrafos) {
        if(color == 'green'){
            parrafo.setAttribute('style','background-color:green; color:white;');
        }else{
            parrafo.setAttribute('style','background-color:transparent; color:black;')
        }
    }
}