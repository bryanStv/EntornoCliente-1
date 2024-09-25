let navegador = navigator.userAgent.toLowerCase();

alert(navegador);

if(navegador.includes("firefox")){
    window.resizeTo(500,500);
    alert("FUNCIONA");
}else{
    alert("Operación no permitida con este navegador");
}