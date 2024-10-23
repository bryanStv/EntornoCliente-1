window.onload = function(){
    const formulario = document.getElementById('formulario1');

    const nombre = document.getElementById('nombre');

    nombre.focus();

    const imagen = document.getElementById('foto');

    imagen.addEventListener("change",function(){
        const archivo = imagen.value;
        const expRegular = /\.(jpe?g|png)$/;

        if(!expRegular.test(archivo)){
            alert('Solo se permiten archivos de tipo .jpg o .png');
            imagen.value = '';
        }else{
            alert('Imagen correcta')
        }
    })

    formulario.addEventListener('submit',function(e){
       
    })
}

