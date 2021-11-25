/* 1 punto */
/*Definir un sistema que me permita identificar si el usuario ingresó más de 50 caracteres y
mostrar un mensaje indicándole que excedió el número de caracteres permitidos.*/
console.log("Sistema Caracteres");
var textoIngresado = "Shadow Hunters monsters city much tores mocks been binch";

if (textoIngresado.length < 50){
    console.log("El texto ingresado es: " + textoIngresado);
}
else if(textoIngresado.length > 50){
    console.log("El texto ingresado a excedido los caracteres permitidos");
}
else {
    console.log("Ha ocurrido un error");
}

// Pureba //
var numberOne = 2;
var numberTwo = 2;
var numberThree = 3;
if (numberOne > numberTwo){
    console.log("La variable 1 es menor que 2");
}
else if(numberOne < numberTwo){
    console.log("La variable 1 es menor que 2");
}
/*else if(numberOne = numberTwo){
    console.log("Si la variable 1 es igual a la variable 2");
}*/
else {
    console.log("Ha ocurrido un Error");
}

/* 2 punto */
/* Definir un sistema que me permita buscar entre los elementos de un arreglo si hay una
coincidencia en la busqueda. Si encuentra la coincidencia mostrar el mensaje indicando que la
coincidencia fue encontrada. Ej: La palabra a buscar podría ser un nombre. Si el nombre se
encuentra dentro del arreglo, deberá imprimir un mensaje indicando que el nombre fue
encontrado */

var productos = ["arroz","aceite","harina de trigo"];
var productSearch = "chocolate";
if (productos.includes(productSearch)){
    console.log("El producto: " + productSearch + " fue encontrado");
}
else {
    console.log("No fue encontrado");
}

/* 3 punto */
/*Teniendo en cuenta el arreglo de aprendices, definir un sistema que me permita listar todos los
Aprendices y cada aprendiz tendrá su respectivo número.*/

var aprendices1 = new Array();
aprendices1[0] = "Acero";
aprendices1[1] = "Torres";
aprendices1[2] = "Teresa";
aprendices1[3] = "Roscas";
aprendices1[4] = "Perez";
aprendices1[5] = "August";

for (var i = 0; i < aprendices1.length; i ++)
{
    console.log(i + " " + aprendices1[i]);
}
