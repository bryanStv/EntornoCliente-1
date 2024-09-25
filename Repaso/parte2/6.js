function horaActual(){
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();

    let stringFecha = hora+":"+minutos;
    let horamins = `son las ${stringFecha} horas`;

    if(hora > 5 && hora < 14){
        alert("Buenos días: "+horamins);
    }else if(hora < 20){
        alert("Buenas tardes: "+horamins);
    }else{
        alert("Buenas noches: "+horamins);
    }
}