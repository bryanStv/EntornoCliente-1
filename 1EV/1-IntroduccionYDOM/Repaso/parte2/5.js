var texto = document.getElementById("id1");
const fecha = new Date();

function diaSemana(num){
    /*switch(num){
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 0:
            return "Domingo";
    }*/
    dia = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    return dia[num];
}

function currentMonth(month){
    /*switch(month){
        case 0:
            return "Enero";
        case 1:
            return "Febrero";
        case 2:
            return "Marzo";
        case 3:
            return "Ábril";
        case 4:
            return "Mayo";
        case 5:
            return "Junio";
        case 6:
            return "Julio";
        case 7:
            return "Agosto";
        case 8:
            return "Septiembre";
        case 9:
            return "Octubre";
        case 10:
            return "Noviembre";
        case 11:
            return "Diciembre";
    }*/

    mes = ["Enero","Febrero","Marzo","Ábril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre"];
    return mes[month];
}

function fechaActual(){
    let dia = diaSemana(fecha.getDay());
    let numDia = fecha.getDate();
    let mes = currentMonth(fecha.getMonth());
    let year = fecha.getFullYear();

    let texto2 = document.getElementById("id2");

    texto2.innerHTML = `
    ${dia}, ${numDia} de ${mes} de ${year}<br>
    `;
}