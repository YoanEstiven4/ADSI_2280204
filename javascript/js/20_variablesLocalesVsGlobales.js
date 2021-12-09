"use strict"

/* Variable locaal */
function asignarEdad() {
    var edad = 5 + 3;
    console.log(edad);
}

asignarEdad();

/* Variable Global */
var nombre = "Yoan";

function mostrarNombre() {
    console.log("Nombre: " + nombre);
}

mostrarNombre();