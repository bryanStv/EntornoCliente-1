let cadena = prompt("Dime una cadena: ");

var textoPagina = document.getElementById("ej6");
//alert("Longitud cadena: "+cadena.length);

//alert("Mayus: "+cadena.toUpperCase()+" Minus: "+cadena.toLowerCase());

let palabras = cadena.split(" ");

//alert("CADENA NORMAL");

function recorrer(palabras){
    final = "";
    palabras.forEach(element => {
        final += (element) + "<br>";
    });
    return final;
}

//alert("CADENA AL REVÉS");

function recorrerReves(palabras){
    final = "";
    for(let i = palabras.length-1;i >= 0; i--){
        final += (palabras[i]) + "<br>";
    }
    return final;
}

textoPagina.outerHTML = "Longitud cadena: "+cadena.length + "<br>" +
"Mayus: "+cadena.toUpperCase()+" Minus: "+cadena.toLowerCase() + "<br>" +
"CADENA NORMAL " + "<br>" + recorrer(palabras) + "<br>" + 
"CADENA AL REVÉS " + "<br>" +recorrerReves(palabras);