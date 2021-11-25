/* Operador condicional */
"use strict"

/* Condicional Simple */
var edad = 19;
if (edad >= 19) {
    console.log("Bienvenido. Dirijase a la mesa de votacion");
}

/* Condicional Compuesto */
/* Ambiente 1: 20 personas */
/* Ambiente 2: 40 personas */
/* Bioauditorio: 100 personas */
/* Informar si no hay ambiente con capacidad suficiente */
/* Informar si hay surgido un error */
console.log("===Condicional Compuesto===")
var cantidadPersonas = "treinta people";

if (cantidadPersonas >=1 && cantidadPersonas <= 20) {
    console.log("Por favor, use el ambiente N. 1");
}
else if (cantidadPersonas > 20 && cantidadPersonas <= 40) {
    console.log("Por favor, use el ambiente N. 2");
}
else if (cantidadPersonas > 40 && cantidadPersonas <= 100) {
    console.log("Por favor, use el bioauditorio");
}
else if (cantidadPersonas > 100) {
    console.log("No hay ambiente con la capacidad suficiente");
}
else {
    console.log("Ha surgido un error");
}

/* Condicional Anidado */
/* Sistema para determinar el descuento del usuario */
/* Si el usuario es menor de 10 años o mayor a 70 años tiene un descuento sobre el valor del tiquete de 10%.
Si el destino es Cartagena, estos usuarios tienen
descuento adicional acumulable del 10%.
Si la aerolinea es Latam a dicho destino, estos usuarios
tienen descuento adicional acumulable del 10% */
var edadUsuario = 71;
var aerolineaUsuario = "Latam";
var destinoUsuario = "San Andres";
var valorTiquete = 250000;
var descuento = 10;
var valorDescuento = (valorTiquete * .10);

if (edadUsuario <= 10 || edadUsuario >= 70) {
    valorTiquete = valorTiquete -(valorTiquete*valorDescuento);
    if (destinoUsuario === "Cartagena")
        valorTiquete = valorTiquete -(valorTiquete*valorDescuento);
        if (aerolineaUsuario ==="Latam") {
            valorTiquete = valorTiquete -(valorTiquete*valorDescuento)
        }
}