function numeroEnlaces(){
    let enlaces = document.getElementsByTagName('a');
    alert('Número de enlaces: '+enlaces.length);
}

function referenciaEnlaces(){
    let totalReferencias = 0;
    let referencias = document.getElementsByTagName('a');

    for(let i = 0; i < referencias.length; i++){
        if(referencias[i].hasAttribute('href')){
            totalReferencias++;
        }
    }
    
    alert('Número total de referencias: '+totalReferencias);
}

function numEnlacesParrafo(){
    let contenedor = document.getElementById('contenedor');
    let resultado = '';

    if(contenedor.hasChildNodes()){
        let parrafos = contenedor.getElementsByTagName('p');
        let contador = 0;

        while(contador < parrafos.length){
            alert('Parrafo nº'+(contador+1)+': '+referenciasEnlacesEnParrafo(parrafos[contador]));
            contador++;
        }
    }
}

function referenciasEnlacesEnParrafo(parrafo){
    if(parrafo.hasChildNodes){
        let totalReferencias = 0;
        let referencias = parrafo.getElementsByTagName('a');
    
        for(let i = 0; i < referencias.length; i++){
            if(referencias[i].hasAttribute('href')){
                totalReferencias++;
            }
        }

        return totalReferencias;
    }else{
        return 0;
    }
}