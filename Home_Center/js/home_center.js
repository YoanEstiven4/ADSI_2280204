"use strict"

let esmeralda = document.getElementById("esmeralda");
let livia = document.getElementById("livia");


esmeralda.addEventListener("click", function(){
    esmeralda.classList.remove("div-esmeralda");
    esmeralda.classList.add("div-esmeralda-hidden");
    livia.classList.add("div-livia");
    livia.classList.remove("div-livia-hidden");
});
livia.addEventListener("click", function(){
    livia.classList.remove("div-livia");
    livia.classList.add("div-livia-hidden");
    esmeralda.classList.add("div-esmeralda");
    esmeralda.classList.remove("div-esmeralda-hidden");
});
maluma.addEventListener("click", function(){
    maluma.classList.remove("div-maluma");
    maluma.classList.add("div-maluma-hidden");
    jose.classList.add("div-jose");
    jose.classList.remove("div-jose-hidden");
});
jose.addEventListener("click", function(){
    jose.classList.remove("div-jose");
    jose.classList.add("div-jose-hidden");
    maluma.classList.add("div-maluma");
    maluma.classList.remove("div-maluma-hidden");
});