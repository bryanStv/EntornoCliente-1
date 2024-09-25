let contador = 0;
let suma = 0;

for(let i = 1; i <= 5;i++){
    let n = parseInt(prompt("Introduce el número "+i));
    if(n > 100){
        contador++;
    }
    suma+=n;
}

alert("La suma es de "+suma);
alert("Hay "+contador+" mayores a 100");