var contenedor = document.getElementById('Ej1');
var contenedor2 = document.getElementById('Ej2');
var contenedor3 = document.getElementById('Ej3');
var contenedor4 = document.getElementById('Ej4');

//Ejercicio 1
function letraNormal(elemento){
    elemento.style.fontSize = '12pt';
};

function letraGrande(elemento){
    elemento.style.fontSize = '16pt';
};

//Ejercicio 2
contenedor2.addEventListener('mouseover',function(){
    contenedor2.style.fontSize = '16pt';
});

contenedor2.addEventListener('mouseout',function(){
    contenedor2.style.fontSize = '12pt';
});

//Ejercicio 3
contenedor3.addEventListener('mouseover',function(event){
    event.target.style.fontSize = '16pt';
});

contenedor3.addEventListener('mouseout',function(event){
    event.target.style.fontSize = '12pt';
});

//Ejercicio 4
function esNavegadorAntiguo() {
    if (document.documentMode) {
        return true;
    }
    return false;
}

function tamañoTexto(elemento){
    if(esNavegadorAntiguo){
        contenedor4.attachEvent('mouseover',function(){
            elemento.style.fontSize = '12pt';
        })
        contenedor4.attachEvent('mouseout',function(){
            elemento.style.fontSize = '12pt';
        })
    }else{
        contenedor4.addEventListener('mouseover',function(){
            elemento.style.fontSize = '12pt';
        })
        contenedor4.addEventListener('mouseout',function(){
            elemento.style.fontSize = '12pt';
        })
    }
}