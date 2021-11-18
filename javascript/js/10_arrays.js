"use strict"

/* Formas de declarar e inicializar un arreglo */
/* Forma 1 */
var aprendiz1 = new Array();
aprendiz1[0] =  1;
aprendiz1[1] = "Yoan Estiven";
aprendiz1[2] = "Becerra Zambrano";
aprendiz1[3] = 19;
aprendiz1[4] = "B/Los Pinos";
aprendiz1[5] = 166;

/* Forma 2 */
var aprendiz2 = new Array(2, "Yoan Estiven", "Becerra Zambrano", 19, "B/Los Pinos", 166);

/* Forma 3 */
var aprendiz3 = [3, "Sebas", "Pendejo", 30, "B/El Porve", 146];

/* Forma 4 */
var aprendiz4 = [4, "Victor Manuel", "Murcia Cuellar", 18, "B/ cristales", 146];

console.log(aprendiz2[1]+" "+aprendiz2[2]+" "+aprendiz2[3]);
console.log(aprendiz3[1]+" "+aprendiz3[2]+" "+aprendiz3[3]);

/* Mostrar el nombre completo de un aprendiz */
console.log("Nombre completo del aprendiz N. 4: " + aprendiz4[1]+" "+ aprendiz4[2]+" "+ aprendiz4[3]);

/* Añadiendo elementos al array */
aprendiz3[6] = "3145834567";
console.log(aprendiz3[6]);

/* Contando elementos */
var cantidadElementos = aprendiz1.length;

console.log("Aprendiz 1 tiene " + cantidadElementos + "elementos");

/* Contando caracteres */
var cantidadCaracteres = aprendiz2[1].length;
console.log("Cantidad de caracteres: " + cantidadCaracteres);