"use strict"

let cantidadLibrosGlobal = document.getElementById("cantidadLibros").innerHTML;

function pruebaSuma() {
    /* si el valor es mayor a 0 y el valor es menor a 10*/
    cantidadLibrosGlobal = Number(cantidadLibrosGlobal) + 1;
    document.getElementById("cantidadLibros").innerHTML = cantidadLibrosGlobal;
    modificarTotal();
}
function pruebaRestar() {
    /* si el valor es mayor a 0 y el valor es menor a 10*/
    if (cantidadLibrosGlobal >= 1) {
    cantidadLibrosGlobal = Number(cantidadLibrosGlobal) - 1;
    document.getElementById("cantidadLibros").innerHTML = cantidadLibrosGlobal;
    modificarTotal();
}
}

function modificarTotal() {
    let cantidadLibros = document.getElementById("cantidadLibros").innerHTML;
    if (cantidadLibros == "1") {
        document.getElementById("cantidadSingularPlural").innerHTML = cantidadLibros + " Producto";
    }
    else {
        document.getElementById("cantidadSingularPlural").innerHTML = cantidadLibros + " Producto";
    }
    mostrarTotal();
}
function mostrarTotal() {
    let valorUnitario = document.getElementById("valorUnitario").innerHTML;
    let costoTotal = Number(valorUnitario) * Number(cantidadLibrosGlobal);
    document.getElementById("costoTotal").innerHTML = costoTotal;
}

/* Vamos hacer la funcion de restar */

