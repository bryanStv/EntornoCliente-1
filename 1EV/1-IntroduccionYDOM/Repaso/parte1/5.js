var iva = 0.21;

let n1 = parseFloat(prompt("Introduce precio: "));

let precioIva = n1*iva;
alert("Iva del producto: "+precioIva);

let total = n1+precioIva;

alert("Total+IVA: "+total.toFixed(2));