var titulo = document.getElementById("t1");
titulo.innerHTML = "EJERCICIO 2";

let formulario = document.getElementById("basicForm");
let resultado = document.getElementById("resultadoEJ2");

function tratarDatos(){
    let dni = document.getElementById("dni").value;

    if(dni == ''){
        alert("No se ha introducido DNI");
        document.getElementById("dni").focus();
        return false;
    }else{
        window.location.href = "../formulario2.html";
        let resultado = document.getElementById("datosFinales");
        resultado.innerText = "DNI: "+ dni;
    }
};

formulario.addEventListener("submit", (event) => {
    if(tratarDatos == false){
        event.preventDefault();
    }

    tratarDatos();

    sendData();
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