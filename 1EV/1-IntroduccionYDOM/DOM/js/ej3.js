var titulo = document.getElementById("t1");
titulo.innerHTML = "EJERCICIO 3";

let area = document.getElementById("numero");

var valor = 0;

area.innerHTML = valor;

function sumar(){
    valor+=10;
    area.innerHTML = valor;
};

function restablecer(){
    valor = 0;
    area.innerHTML = valor;
};