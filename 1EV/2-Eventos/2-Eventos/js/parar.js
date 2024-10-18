window.onload = function() {
    const pagina = document.body;

    pagina.addEventListener('click',function(e){
        e.preventDefault();
        alert("Estas haciendo click en el \n Body");
    })

    pagina.getElementsByTagName('img')[0].addEventListener('click',function(e){
        e.stopPropagation();
        //e.preventDefault();
        alert("Estas haciendo click en la \n Imagen");
    })
}

// https://codepen.io/cvdgp/pen/EqWqmb