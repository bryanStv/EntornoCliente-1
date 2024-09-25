let titulo = document.getElementById("id1");

titulo.innerHTML = "EJ 8";

let urlDoc = document.getElementById("parrafo");

urlDoc.innerHTML = `
URL: ${window.location.href} <br>
PathName: ${window.location.pathname} <br>
WEB Protocol: ${window.location.protocol}`;

function irAGoogle(){
    location.href="http://www.google.com/";
};