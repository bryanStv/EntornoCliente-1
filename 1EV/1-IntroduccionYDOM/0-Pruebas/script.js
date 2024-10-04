var titulo = document.getElementsByTagName('h1')[0];
var section1  = document.getElementById('s1');

let saltoLinea = document.createElement('br');
let textNode  = document.createTextNode('Este es un texto agregado desde JavaScript');

titulo.appendChild(saltoLinea);
titulo.appendChild(textNode);

function cambiarColorParrafos(section){
    var parrafos = section.getElementsByTagName('p');

    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color =  'blue';
    }
}

cambiarColorParrafos(section1);

titulo.addEventListener('mouseover',function(){
    titulo.style.color = 'red';
    titulo.style.fontSize = '3em';
    titulo.style.backgroundColor = 'black';
})

titulo.addEventListener('mouseout',function(){
    titulo.style.color = 'black';
    titulo.style.fontSize = '2em';
    titulo.style.backgroundColor = 'transparent';
})

var lateral = document.getElementById('lateral');

function isPrimo(n){
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function allPrimos(n){
    var primos = [];
    let lista = document.createElement('ul');
    for (let i = 2; i <= n; i++) {
        if (isPrimo(i)) {
            primos.push(i);
            let listaInterior = document.createElement('li');
            let texto =  document.createTextNode(i+" ");
            listaInterior.appendChild(texto);
            lista.appendChild(listaInterior);     
        }
    }
    lateral.appendChild(lista);
}

allPrimos(100);

var formRegistro = document.forms[0];

formRegistro.addEventListener('submit',function(event){
    event.preventDefault();
    var nombre = formRegistro.elements['name'].value;
    var correo = formRegistro.elements['email'].value;
    var pass = formRegistro.elements['password'].value;
    var pais = formRegistro.elements['country'].value;

    alert('Tus datos son '+nombre+" "+correo+" "+pass+" "+pais);
    //formRegistro.submit();
})

