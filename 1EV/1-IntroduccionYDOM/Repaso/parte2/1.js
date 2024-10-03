var iva = 0.21;

let n1 = parseFloat(prompt("Introduce precio: "));

function ivafun(precio){
    let precioIva = n1*iva;
    let ivaF = ("Iva del producto: "+precioIva.toFixed(2));

    let total = n1+precioIva;
    let totalFinal = ("Total+IVA: "+total.toFixed(2));

    return ivaF + "<br>" + totalFinal;
}

let indice = document.getElementById("id2");

let precioFinal = ivafun(n1);

indice.innerHTML = `${ivafun(n1)}`;
