"use strict"

/* Imprimir fecha y hora del navegador */
var currentTime = new Date();
console.log(currentTime);

/* Desglosando fechas y horas */
var anyo = currentTime.getFullYear();
console.log("Año: " + anyo);

/* Day */
var dey = currentTime.getDay();
console.log("Dia: " + (dey + -2));

/* Mes */
var mes = currentTime.getMonth();
console.log("Mes: " + (mes + 1));

/* DATO */
var dato = currentTime.getDate();
console.log("Dato: " + dato);

/* Hora */
var hora = currentTime.getHours();
console.log("Hora: " + hora);

/* Minutos*/
var minu = currentTime.getMinutes();
console.log("Minutos: " + minu);

/* Segundos */
var segundos = currentTime.getSeconds();
console.log("Segundos: " + segundos);

/* Mil segundos */
var milSegundos = currentTime.getMilliseconds();
console.log("Mil segundos: " + milSegundos);

/* Milisegundos */
var miliSegundos = currentTime.getTime();
console.log("MiliSegundos: " + miliSegundos);
/* de numero a texto dia */
var nameday = new Array();
nameday[6] = "Lunes";
nameday[5] = "Martes";
nameday[4] = "Miercoles";
nameday[3] = "Jueves";
nameday[2] = "Viernes";
nameday[1] = "Sabado";
nameday[0] = "Domingo";
console.log("dia: " + nameday [dey]);

var diaSemanaStr = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
console.log("Hoy es: " + diaSemanaStr[dey]);

/* fecha: jueves, 2 de diciembre del año 2021 */
var mesesStr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Fecha: " + diaSemanaStr[dey] + ", " + (dey + -2) + " de " + mesesStr[mes] + " del año " + anyo);

var fechaFutura = new Date("January 2, 2022");
/* Obtengo los milisegundos transcurridos hasta el dia de hoy */