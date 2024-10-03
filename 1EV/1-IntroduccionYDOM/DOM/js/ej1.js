var titulo = document.getElementById("t1");
titulo.innerHTML = "EJERCICIO 1";

var element = document.getElementById("p1");

element.innerHTML = `
<a href="https://aules.edu.gva.es/" 
onmouseover="alerta()">Hipervínculo a AULES</a>
`;

function alerta(){
    alert("Hipervínculo a Aules GVA");
};
