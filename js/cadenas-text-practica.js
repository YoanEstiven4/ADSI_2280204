"use strict"
/* 1. cambiando todo a MAYUSCULAS: */
var ciudad1 = "NaCiOnAl";
var ciudad2 = "ToCaYo";
/* Pasando todo a mayusculas */
ciudad1 = ciudad1.toUpperCase();
ciudad2 = ciudad2.toUpperCase();
console.log(ciudad1 + ciudad2);

/* 2. cambiando todo a minusculas: */
ciudad1 = ciudad1.toLowerCase();
ciudad2 = ciudad2.toLowerCase();
console.log(ciudad1 + ciudad2);

/* 3. primer letra en MAYUSCULA y el resto en minuscula: */
ciudad1 = ciudad1[0].toUpperCase() + ciudad1.slice(1);
ciudad2 = ciudad2[0].toUpperCase() + ciudad2.slice(1);
console.log(ciudad1 + ciudad2);

/* 4. extrayendo partes de la cadena de texto(slice): */
var anyo2 = "2023";
var auxConsecutivo = anyo2.slice(2,4);
console.log(auxConsecutivo);

/* 5. contando caracteres: */
var tematica = "Lo mejor del lenguaje de PHP en el mundo de la programacion";
console.log("Longitud: " + tematica.length);

/* 6. hallando dobles espacios: */
var nombres = "Yoan Estiven";
var texto = "La cadena tiene espacios dobles";
for (i = 0; i < nombres.length; i++){
    if (nombres.slice(i, (i + 2)) === "  ") {
        console.log("La cadena tiene dobles espacios: ");
        break;
    }
}

/* 7. reemplazando texto */
var hobby = "Programar en Java";
var newLang = "Python";
for (i = 0; i < hobby.length; i++) {
    if (hobby.slice(i, i + 4) === "Java") {
        hobby = hobby.slice(0, i);
    }
}
console.log(hobby + newLang);

/* 8. reemplazando texto con indexof */


var hobby2 = "Programas en javascript a tope";
var firstChar = hobby2.indexOf("javascript")
if (firstChar !== -1) {
    console.log(firstChar);
    hobby2 = hobby2.slice(0, firstChar) + "php" + hobby2.slice(firstChar + 10);
    console.log(hobby2);
}

/* extrayendo el primer caracter */
var primerNombre = "Yoan";
var primerCaracter = primerNombre.charAt(0);
console.log(primerCaracter);

/* 9. extrayendo el ultimos caracter */
var primerNombre = "Yoan";
var primerCaracter = primerNombre.charAt(primerNombre.length - 1);
console.log(primerCaracter);

/* 10. buscando caracteres especiales */
var frase = "Hola Gente!";
for (var i = 0; i < frase.length; i++) {
    if (frase.charAt(i) === "!") {
        console.log("La cadena tiene signos de admiracion.");
    }
}

/* 11. reemplazando caracteres con el metodo replace */
var ciudad = "Valle del Cauca";
ciudad = ciudad.replace("Cauca", "Santander");
console.log(ciudad);