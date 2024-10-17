window.onload = function() {
    //EJERCICIO 1

    const formulario1 = document.forms[0];

    formulario1.addEventListener('submit',function(event){
        const nombre = formulario1.nombre.value;
        const email = formulario1.email.value;
        const mensaje = formulario1.mensaje.value;

        const resultado1 = document.getElementById('resultado1');
        let datos;

        if(nombre == '' || email == '' || mensaje == ''){
            event.preventDefault();

            datos = 'NO SE HA PRODUCIDO ENVIO';
        }else{
            event.preventDefault();

            datos = `
            ENVIO PRODUCIDO <br>
            Nombre: ${nombre} <br>
            Email: ${email} <br>
            Mensaje: ${mensaje} <br>
            `;
        }

        resultado1.innerHTML = datos;

    });

    //EJERCICIO 2
    const enlace = document.getElementById('enlace');

    enlace.addEventListener('click',function(event){
        event.preventDefault();

        enlace.setAttribute('href','https://www.duckduckgo.com');
        window.location.href = enlace;
    })
}

