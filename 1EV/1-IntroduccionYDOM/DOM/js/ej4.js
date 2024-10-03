var titulo = document.getElementById("t1");
titulo.innerHTML = "EJERCICIO 4";

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

let randomNumber = random(1,10);

let num = prompt("Introduce un número del 1 al 10");

resultadoNum = document.getElementById("res4");
resultadoNum.innerHTML = "Número Random: " + randomNumber + " Número Dado: "+num;

let resultado = document.getElementById("finishResult4");

randomNumber == num ? resultado.innerHTML = "Felicidades" : resultado.innerHTML = "Intentalo otra vez";
