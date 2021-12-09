/* 1. Desarrollar un sistema que me muestre la hora actual en formato A.M. – P.M. Si son menos de 
las 10, agregar un 0 a la izquierda.*/

var AM_PM_Variable = "";
var date_var = new Date();
var curr_hour = date_var.getHours();
if (curr_hour < 12)
{
    AM_PM_Variable = "PM";
}
else
{
    AM_PM_Variable = "AM";
}
if (curr_hour == 0)
{
    curr_hour = 12;
}
if (curr_hour > 12)
{
    curr_hour = curr_hour - 12;
}

var curr_min = date_var.getMinutes();
document.write(curr_hour + " : " + curr_min + "" + AM_PM_Variable);

console.log("===1. Este ejercicio es el que funciona===");

let hoy = new Date();
let dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

let numeroDiaSemana = hoy.getDay();

console.log("Hoy es: " + dias[numeroDiaSemana]);

console.log();

let horas = hoy.getHours();
let minutos = hoy.getMinutes();
let segundos = hoy.getSeconds();

let jornada = horas >= 12 ? 'PM' : 'AM';

minutos = ('0' + minutos).slice(-2);
segundos = ('0' + segundos).slice(-2);

console.log("Hora Actual: " + horas % 12 + " : " + minutos + " : " +  segundos + " " + jornada);

/* 2.Definir un sistema que les permita saber cuántos días faltan para su próximo cumpleaños.*/
console.log("===2. Dias que falan para mi cumpleaños===");
var newYear = new Date("June 2, 2022");
var fehcaHoy = new Date();


var msToday = fehcaHoy.getTime();
var msNewYear = newYear.getTime();

var msDiff = msNewYear - msToday;

var diasDiff = msDiff / (1000 * 60 * 60 * 24);
var deys = "Dias...";
console.log("Proximo Cumpleaño: " + diasDiff);

diasDiff = Math.floor(diasDiff);
console.log("Proximo Cumpleaño Sin Decimales: " + diasDiff + " " + deys);

console.log("===3. intervalo ===");
/*3. Definir un sistema que cargue la fecha y si ese día el usuario cumple años arrojar un mensaje de 
felicitaciones.*/

var fechaDey = new Date();
var dey = fechaDey.getDate();

var mes = fechaDey.getMonth();
console.log("La fecha de hoy es: " + dey + " " + "del mes " + (mes + 1));

var fechaCumpleanosYoan = new Date("December 9, 2021");
var deyCumpleano = fechaCumpleanosYoan.getDate();
var mesCumpleano = fechaCumpleanosYoan.getMonth();
var felizCumplePorEnd = "Yoan Estiven";
if(mesCumpleano = mes && deyCumpleano == dey)
{
    console.log("Feliz Cumpleaños: " + felizCumplePorEnd);
}

/*4. Definir un sistema que le permita saber cuántos años va a cumplir según la fecha ingresada.
Tenga en cuenta que para los 3 ejercicios usted debe declarar todas las variables que necesita y 
darles un valor inicial para poder ejecutar el ejercicio.
Tenga en cuenta que una de las mejores prácticas en el desarrollo de software es la reusabilidad 
y la escalabilidad, por lo tanto verifique que cambiando el valor de las variables se cambia el 
resultado y este es correcto.*/

console.log("===4. Definiendo edad futura===");

var anoActual = fechaDey.getFullYear();
var fechaNac = new Date("June 2, 2002");
var anoBirth = fechaNac.getFullYear();
var edad = anoActual - anoBirth;
console.log("Años: " + (edad + 1));