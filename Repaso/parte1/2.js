let numeros = [7,8,2,9,10];

let contador = 0;
let suma = 0;

numeros.forEach(element => {
    if(element > 8){
        contador++;
        suma += element;
    }
});

alert(contador);
alert(suma);