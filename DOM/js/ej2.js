var titulo = document.getElementById("t1");
titulo.innerHTML = "EJERCICIO 2";

let formulario = document.getElementById("basicForm");
let resultado = document.getElementById("resultadoEJ2");

let currentURL = location.href;

formulario.addEventListener('submit', function(event) {

    let dni = document.getElementById('dni').value.trim();
    
    if (dni === '') {
        event.preventDefault();
        alert("No se ha introducido DNI");
        document.getElementById("dni").focus();
    } else {
        //document.getElementById('resultadoEJ2').textContent = '';
        //location.href(currentURL+"?dni="+dni);
        //window.open(currentURL+"?dni="+dni,'_blank', 'width=800,height=600');

        event.preventDefault();
        resultado.textContent = currentURL+"?dni="+dni;

    };

});