var titulo = document.getElementById("t1");
titulo.innerHTML = "EJERCICIO 5";

alert("Bienvenido");

function mensaje(){
    window.open("index.html", "width=600,height=400");
}

setTimeout(() => {
    mensaje();
}, 20000);