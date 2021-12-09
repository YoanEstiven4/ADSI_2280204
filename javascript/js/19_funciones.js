"use strict"

function llamarHora() {
    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActual = fechaActual.getMinutes();
    if (horaActual > 12) {
        horaActual = (horaActual-12);
    }if (horaActual < 10) {
        horaActual = ("0" + horaActual);
    }if (minutosActua < 10) {
        minutosActual = ("0" + minutosActual);
    };
    alert("Hora actual " + horaActual + " " + minutosActual);
}
function presentacion(nombre, titulado){
    alert("Bienvenido. Nombre: " +
    nombre + ". Titulado: " + titulado);
}

function validarDescuento(compra) {
    var total = 0;
    /* Si la compra es superior a $10.000 tiene descuento del 10% */
    if (compra >= 10000) {
        total = compra * .90;
    }
    /* Si la compra es entre $5.000 y menos de $10.000 tiene descuento del 5% */
    else if (compra >= 5000 && compra <= 9999) {
        total = compra * .95;
    }
    else {
        total = compra;
    }
    return total;
}

function calcularDescuento(compra) {
    alert("Costo total: $" + validarDescuento(compra));
}