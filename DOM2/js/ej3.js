var contenedor = document.getElementById('con');
var defaultColor = 'white';

contenedor.style.backgroundColor = defaultColor;

function setColor(color){
    if(color == null){
        contenedor.style.backgroundColor = defaultColor;
    }else{
        contenedor.style.backgroundColor = color;
    }
}