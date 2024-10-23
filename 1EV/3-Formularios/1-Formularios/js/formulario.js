window.onload = function(){
    const formulario = document.getElementById('formulario1');

    //Parte 1
    const nombre = document.getElementById('nombre');

    nombre.focus();

    //Parte 2
    const imagen = document.getElementById('foto');

    imagen.addEventListener("change",function(){
        const archivo = imagen.value;
        const expRegular = /\.(jpe?g|png)$/;

        if(!expRegular.test(archivo)){
            alert('Solo se permiten imagenes del tipo .jpg, jpeg o .png');
            imagen.value = '';
        }else{
            alert('Imagen correcta');
        }
    })

    //Parte 3
    const aficion = document.getElementById('aficion');

    aficion.addEventListener('change',function(){
        const longitud = aficion.length;
        const indice =  aficion.selectedIndex;
        const seleccion = aficion.value;

        alert(` La longitud de la lista es ${longitud}
                El índice seleccionado es el ${indice}
                El valor del índice seleccionado ${seleccion}`);
    })

    //Parte 4
    const observaciones = document.getElementById('observaciones');
    const maxCaracteres = 150;

    observaciones.addEventListener('keydown',function(e){
        const longitud = observaciones.value.length;

        if(e.key == 'Backspace'){
            return;
        }else if(longitud == maxCaracteres){
            e.preventDefault();
        }
    })

    //Parte 5
    const dni = document.getElementById('dni');
    const telefono = document.getElementById('telefono');
    
    const expReg = /^\d{9}$/;

    formulario.addEventListener('submit',function(e){

        if(dni.value == ''){
            e.preventDefault();
            alert('El campo DNI no puede estar vacio');
        }

        if(!expReg.test(telefono.value)){
            e.preventDefault();
            alert('El telefono debe tener 9 números');
        }
    })

    //EJ2
    const selectorColor = document.getElementById('colores');
    const pColor = document.getElementById('pColor');

    selectorColor.addEventListener('change',function(){
        const seleccion = selectorColor.value;
        pColor.style.color = seleccion;
    })

    //EJ3
    const coloresRadio = document.getElementsByName('coloresRadio');

    for(let color of coloresRadio){
        color.addEventListener('change',function(){
            const seleccion = color.value;
            pColor.style.color = seleccion;
        })
    }

    //EJ4
    const checkboxes = document.getElementsByName('checkEj4');

    function actualizar(){
        const parrafo4 = document.getElementById('parrafoEj4');

        if(checkboxes[0].checked){
            parrafo4.style.fontWeight = 'bold';
        }else{
            parrafo4.style.fontWeight = 'normal';
        }
    
        if(checkboxes[1].checked){
            parrafo4.style.fontStyle = 'italic';
        }else{
            parrafo4.style.fontStyle = 'normal';
        }
    }

    for(let checkbox of checkboxes){
        checkbox.addEventListener('change',function(){
            actualizar();
        })
    }

}

