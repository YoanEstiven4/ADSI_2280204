"use strict"

let esmeralda = document.getElementById("esmeralda");
let livia = document.getElementById("livia");


esmeralda.addEventListener("click", function(){
    esmeralda.classList.remove("div-esmeralda");
    esmeralda.classList.add("div-esmeralda-hidden");
});
livia.addEventListener("click", function(){
    livia.classList.remove("div-livia");
    livia.classList.add("div-livia-hidden");
});