var con = document.getElementById("contenedor");

var elem = document.createElement('input');

elem.setAttribute('type','text');

elem.setAttribute('name','formulario');
elem.setAttribute('size','100');
elem.setAttribute('placeholder','Hola Mundo');
elem.setAttribute('style','background-color: red;');

con.appendChild(elem);