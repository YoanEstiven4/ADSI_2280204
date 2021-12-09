"use strict"

var voto = "Luisa";
var candidatos = ["luisa", "Jesus", "Pepito", "Yolanda", "Rendon", "Nulo", "En Blanco"];
var votos = [0, 0, 0, 0, 0, 0];

for (let i=0; i < candidatos.length; i++) {
    if (voto === candidatos[i]) {
        /* votos[i] = votos[i] + 1; */
        votos[i]++;
    }
}

console.log("===Resultados===");
for (let i=0; i < candidatos.length; i++) {
    console.log(candidatos[i] + ": " + votos[i]);
}