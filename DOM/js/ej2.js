var titulo = document.getElementById("t1");
titulo.innerHTML = "EJERCICIO 2";

let formulario = document.getElementById("basicForm");
let resultado = document.getElementById("resultadoEJ2");

let dni = document.getElementById("dni").value;
let currentURL = location.href;

function existDNI(){
    if(dni == '' || dni == null){
        return false;
    }else{
        return true;
    }
};

formulario.addEventListener("submit", (event) => {
    if(existDNI() == false){
        alert("No se ha introducido DNI");
        document.getElementById("dni").focus();
        console.log("false");
    }else{
        console.log("true");
        resultado.innerText = "DNI: "+ dni + " --> " + 
        currentURL.split('?')[0] + "?dni=" + dni;
    }

    event.preventDefault();
});

/*var titulo = document.getElementById("t1");
titulo.innerHTML = "EJERCICIO 2";

let formulario = document.getElementById("basicForm");
let resultado = document.getElementById("resultadoEJ2");
let urlWeb = window.location.href;

//let querystring = new URLSearchParams(location.search);
//let querystring = new URLSearchParams(location.search);
//let dni = querystring.get('dni');

function eventoEJ2() {
    let datoDNI = document.getElementById("dni").value;
    if(datoDNI == ''){
        alert("No se ha introducido DNI");
        document.getElementById("dni").focus();
    }else{
        resultado.innerText = "DNI: "+datoDNI;
        return datoDNI;
    }
}

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    eventoEJ2();
    event.submitter(eventoEJ2());
});*/


/*formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let datoDNI = document.getElementById("dni").value;

    if(datoDNI == ''){
        alert("No se ha introducido DNI");
        document.getElementById("dni").focus();
    }else{
        resultado.innerHTML = `${datoDNI}`;
    }
});*/