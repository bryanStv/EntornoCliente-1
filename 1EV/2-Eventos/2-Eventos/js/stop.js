window.onload = function() {
    const pagina = document;

    pagina.addEventListener('click',function(){
        alert("Estas haciendo click en el \n Body");
    })

    pagina.getElementsByTagName('img')[0].click(function(e){
        //e.stopPropagation();
        e.preventDefault();
        alert("Estas haciendo click en la \n Imagen");
    })
}

// https://codepen.io/cvdgp/pen/EqWqmb