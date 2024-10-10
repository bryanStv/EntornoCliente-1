var contenedor = document.getElementById('Ej1');
var contenedor2 = document.getElementById('Ej2');
var contenedor3 = document.getElementById('Ej3');
var contenedor4 = document.getElementById('Ej4');

function cambiarTamaño(elem,tam){
    tam = tam + 'pt';
    elem.style.fontSize = tam;
    //elem.style.color = 'blue';
}

//Ejercicio 1
function letraNormal(elemento){
    cambiarTamaño(elemento,12);
};

function letraGrande(elemento){
   cambiarTamaño(elemento,16);
};

//Ejercicio 2
contenedor2.addEventListener('mouseover',function(){
    cambiarTamaño(contenedor2,16);
});

contenedor2.addEventListener('mouseout',function(){
    cambiarTamaño(contenedor2,12);
});

//Ejercicio 3
function evento3(event){
    switch(event.type){
        case 'mouseover':
            cambiarTamaño(this,16);
            break;
        case 'mouseout':
            cambiarTamaño(this,12);
            break;
    }
}

window.onload = function() {
    contenedor3.onmouseover = evento3;
    contenedor3.onmouseout = evento3;
}

/*contenedor3.addEventListener('mouseover',function(event){
    //event.target.style.fontSize = '16pt';
    cambiarTamaño(event.target,16);
});

contenedor3.addEventListener('mouseout',function(event){
    //event.target.style.fontSize = '12pt';
    cambiarTamaño(event.target,12);
});*/



//Ejercicio 4
function esNavegadorAntiguo() {
    if (document.documentMode) {
        return true;
    }
    return false;
}

let elem = contenedor4;
if(esNavegadorAntiguo()){
    elem.attachEvent('mouseover',function(){
        cambiarTamaño(elem,16);
    })
    elem.attachEvent('mouseout',function(){
        cambiarTamaño(elem,12);
    })
}else{
    elem.addEventListener('mouseover',function(){
        cambiarTamaño(elem,16);
    })
    elem.addEventListener('mouseout',function(){
        cambiarTamaño(elem,12);
    })
}

//Ejercicio 5
var formulario = document.forms[0];

formulario.addEventListener('submit',function(event){
    event.preventDefault();
    alert(formulario.elements['cTexto'].value)
})

function esNumero(event){
    let resultado = event.keyCode >= 48 && event.keyCode <= 57;
    //resultado ?  console.log('Es un número') : console.log('No es un número');
    if(!resultado && event.keyChar != 'Backspace'){
        event.preventDefault();
    }
}

//Ejercicio 6
let botones = document.getElementsByTagName('button');

for(let boton of botones){
    boton.addEventListener('click',function(event){
        event.preventDefault();
        alert('Haz pulsado sobre el botón');
    })  
}

//Ejercicio 7

function mostrarHora(){
    let fechaHora = new Date();

    let hora = fechaHora.getHours();
    let min = fechaHora.getMinutes();
    let seg = fechaHora.getSeconds();

    if(hora < 10){
        hora = '0' + hora;
    }if(min < 10){
        min = '0' + min;
    }if(seg < 10){
        seg = '0' + seg;
    }

    return document.getElementById('contenedorRelojes').innerHTML = `${hora}:${min}:${seg}`
}

setInterval(mostrarHora, 1000)

alert('“Página que contiene un reloj digital”');

window.addEventListener('beforeunload',function(event){
    //No se puede utilizar, solo en navegadores antiguos
    event.preventDefault();
    event.alert('Página cancelada');
})