"use strict"

/* Generar un consecutivo del 1 al 20 */
for (var i = 1; i <= 20; i++) {
    console.log(i)
}

/* Generar en pantalla:
aprendiz 1:
aprendiz 2:
aprendiz 3:...hasta el 20
*/
for (var i = 1; i <= 20; i++) {
    console.log("Aprendiz N. " +i);
}

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

/* listar */
for (var i = 0; i <= aprendiz1.length -1; i++) {
    console.log(aprendiz1[i]);
}